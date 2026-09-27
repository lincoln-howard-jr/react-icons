# Development

- [Quick start](../README.md)
- [Usage, props, animation and custom icons](usage.md)
- [Static component names and theme keys](icons.md)
- [Generated icon examples](../examples/README.md)
- [Coverage and Path architecture](icon-coverage.md)
- [Package checks and releases](releases.md)

## Setup

Use Node.js 22 or 24 and npm. Run commands from the repository root.

```bash
npm ci
```

## Generate icon examples

```bash
npm run generate-png
npm run test:examples
```

The generator server-renders every static `createTheme` component, uses one headless
browser to capture 64 × 64 PNGs, and writes `examples/<theme-key>.png` plus
`examples/README.md`. Commit these generated examples with icon changes; do not
edit the images or catalog manually. Animated and continuous groups are excluded.
The validation command checks complete static coverage, catalog entries and PNG dimensions.

Puppeteer normally downloads its browser during installation. To use an existing
Chromium instead (for example on ARM Linux):

```bash
PUPPETEER_SKIP_DOWNLOAD=true npm ci
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium npm run generate-png
```

Adjust the executable path to your installation. Bun is not required.

## Tests and package checks

```bash
npm test
npm run typecheck
npm run test:package
npm --prefix preview-client ci
npm --prefix preview-client run build
```

Tests validate server-rendered geometry and styling, not browser hydration or
animation playback. The package smoke test builds and installs a real tarball
into isolated JavaScript and TypeScript consumers. See [release documentation](releases.md)
for CI and publishing details.

## Interactive preview and visual review

```bash
npm run build
npm run preview
```

Rebuild after library changes: the preview consumes compiled `dist/`.

For a temporary HTML contact sheet of all static components:

```bash
npm run gallery
npm run gallery -- /tmp/my-icon-review
```

The default output is `/tmp/react-icons-gallery/index.html`. Keep temporary
contact sheets, review screenshots and build output untracked; the generated PNG
catalog in `examples/` is the tracked documentation asset set.
