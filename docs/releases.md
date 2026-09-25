# Quality checks and releases

## Checks

`.github/workflows/quality.yml` runs on every pull request, pushes to `main`
and `feat/app-development-icon-baseline`, and as a reusable release gate.
It uses Node.js **22 and 24** (supported LTS lines in the
[official release schedule](https://github.com/nodejs/Release#release-schedule)).
Each matrix job installs both lockfiles with `npm ci`, runs the icon tests,
TypeScript checks, a real package-consumer smoke test, and the preview production
build. `PUPPETEER_SKIP_DOWNLOAD=true` avoids an unnecessary Chromium download;
CI does not claim to check browser animation playback or visual appearance.

Quality jobs have only `contents: read`, never package-write credentials.
PRs use `pull_request`, not `pull_request_target`. External actions are pinned
to reviewed full commit SHAs; update the SHA and version comment together.
Consider requiring both `Quality / Node 22` and `Quality / Node 24` checks in
branch protection (confirm the displayed names after the first Actions run).

Run the same checks locally on either LTS line:

```bash
PUPPETEER_SKIP_DOWNLOAD=true npm ci
npm test
npm run typecheck
npm run test:package
npm --prefix preview-client ci
npm --prefix preview-client run build
```

## Package contract

`npm run build` uses TypeScript to emit CommonJS JavaScript and declarations
into `dist/`. `npm pack` automatically rebuilds via `prepack`. Only `dist/`,
package metadata and the README are shipped; development tools, tests, source
TSX and the preview app are not included. React remains a peer dependency.
The build clears stale output first.

The package root and extensionless subpaths remain supported, including:

- `@lincoln-howard-jr/react-icons`
- `@lincoln-howard-jr/react-icons/components/Path`
- `@lincoln-howard-jr/react-icons/icons/IconProps`
- `@lincoln-howard-jr/react-icons/icons/home`
- `@lincoln-howard-jr/react-icons/icons/animated`
- `@lincoln-howard-jr/react-icons/icons/animated/continuous`

Nested icon module subpaths also resolve through the export map. Both CommonJS
`require` and ESM named imports are tested. The distribution is **not a dual
ESM/CommonJS build**; no ESM tree-shaking guarantee is made. Imports of raw `.tsx`
files, repository internals or arbitrary undeclared paths are no longer exposed.
The former source entrypoint and self-referencing handwritten declaration file
were not a usable plain-JavaScript distribution; generated declarations now
provide the full API, including the root `IconProps` type export.

`npm run test:package` packs the real artifact, checks its file allowlist,
installs it into an isolated temporary consumer (no source aliases or TSX
loader), compiles JSX consumers with Node16 and Bundler resolution, and renders
the exported icons/factories using React server rendering from plain JavaScript.
It also checks custom Path and icon subpath imports. The temporary consumer is
removed afterward. To retain the exact tested tarball:

```bash
npm run test:package -- /tmp/react-icons-release
```

Build before starting the linked preview (`npm run build && npm run preview`).
Rebuild after library changes; the preview consumes `dist/`, not source TSX.
Its Vite configuration explicitly handles the linked CommonJS package.

## Publish target and permissions

The target is **GitHub Packages**, not npmjs.org:

- Name: `@lincoln-howard-jr/react-icons`
- Registry: `https://npm.pkg.github.com/`
- Access: `restricted` (existing package policy is retained)
- Dist-tag: `latest`

Only a **published, non-prerelease GitHub Release** in
`lincoln-howard-jr/react-icons` can publish. Drafts, prereleases, fork releases,
pushes, tags alone and PRs cannot publish. There is no manual-dispatch publish
path. Stable releases only are supported; prerelease distribution would need
an explicit workflow change and separate dist-tag policy.

The read-only validation job requires the tag to be exactly `v<package.json
version>` with a stable numeric `major.minor.patch` version. It checks that the
tag resolves to the release event commit and that the commit is reachable from
`origin/main`. The release's editable target-branch text is not trusted. The
quality workflow reruns against that release commit on both LTS lines; a failure
blocks publication. The publish job checks out the immutable event SHA, packs
and smoke-tests again, then publishes **that same tarball** with lifecycle
scripts disabled.

Only the publish job gets `packages: write`; all jobs have `contents: read`.
`actions/setup-node` configures the scoped registry, and only the actual publish
step receives `NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}`. **No PAT or custom
repository secret is required for this workflow.** Checkout does not persist
git credentials. No npmjs token, OIDC configuration or provenance claim is used.

For an already-existing GitHub package, ensure its settings link it to this
repository and grant this repository Actions write access. Organization/repository
policies must allow GitHub Actions to publish packages. A `403` may indicate a
package access/policy issue; do not work around it by putting a PAT in the repo.
Package visibility and consumer access are also controlled in GitHub Packages
settings; `--access=restricted` does not configure repository visibility.

## Release procedure

1. Merge the workflow/packaging PR to `main` and ensure quality checks pass.
2. Choose a **new, unpublished** version. Use a major version for the first
   compiled-package release if consumers rely on raw `.tsx` or other formerly
   accessible deep imports: the new export map intentionally removes those paths.
   Update `package.json` and the root
   lockfile together (for example `npm version <version> --no-git-tag-version`),
   commit through the normal review process, and merge to `main`. This workflow
   change intentionally does not bump the existing `2.3.1` version.
3. Tag that merged commit exactly `v<version>`, push the tag, and create a GitHub
   Release for that tag in the canonical repository. Review the release notes;
   publishing the release is the explicit publication action. Do not mark it as
   a prerelease. Protect release tags and limit who can publish releases.
4. Watch **Publish GitHub Packages**: validation, both quality jobs and publish
   must succeed. Verify the new version on the repository's Packages page and
   install it in a consumer configured for this registry.
5. Published versions are immutable. A rerun after successful publication will
   fail for an existing version; use a new version for changed content. A failed
   run before publication can be retried only if that version is still unused.
   Never move a release tag to bypass checks.

Publishing this workflow does not itself publish a package. No release or
registry write is part of local validation.

## Installing from GitHub Packages

Consumers must map the scope in their npm configuration:

```ini
@lincoln-howard-jr:registry=https://npm.pkg.github.com/
```

GitHub Packages requires authenticated npm access. A local consumer generally
uses a GitHub PAT (classic) with `read:packages` and access to the package;
that is separate from the workflow's automatic `GITHUB_TOKEN` publication.
Follow [GitHub's npm registry authentication instructions](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
Store authentication only in user/CI configuration, never in a committed `.npmrc`.
Another repository's Actions workflow needs package read access granted to that
repository before its `GITHUB_TOKEN` can install the package.

## Known dependency debt

Dependency audits are not a release gate in this change. Existing root and
preview dependency vulnerabilities should be reviewed separately rather than
silently upgraded in an icon/workflow PR. Successful quality checks do not imply
a clean security audit.
