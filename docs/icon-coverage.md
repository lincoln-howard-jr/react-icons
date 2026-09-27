# Icon coverage audit

## Scope and inventory

This is a **bounded general app-development baseline**, not a claim that every possible application or domain has an icon. All existing glyphs were inspected alongside `components/Path.tsx`, `icons/IconProps.ts`, the public entry point, the preview client and the PNG CLI.

| Catalog | Before | Added | After |
| --- | ---: | ---: | ---: |
| Static glyphs | 32 | 60 | 92 |
| Play-once animated components | 15 | 0 | 15 |
| Continuous animated components | 16 | 0 | 16 |
| Renderable icon components | 63 | 60 | 123 |

Counts exclude factories, `createTheme`, types and Path primitives. Each static module has a named component, a `genXIcon` factory and a lower-camel-case `createTheme` key. Static components are exported from the root; factories are available from their icon modules. Existing animated barrel exports also expose their factories; that API is preserved.

The original 32 static theme keys were: `book`, `calendar`, `cancel`, `chat`, `chevronDown`, `chevronLeft`, `chevronRight`, `chevronUp`, `copy`, `dash`, `dotsHorizontal`, `dotsVertical`, `download`, `file`, `filter`, `lightBulb`, `menu`, `notifications`, `pen`, `plus`, `questionMark`, `remove`, `ruler`, `search`, `settings`, `shrug`, `spinner`, `star`, `stopwatch`, `submit`, `trash`, `user`.

The old README listed only 26 of them and incorrectly described `DashIcon` as a horizontal dash. The glyph is a dashboard panel grid; `RemoveIcon` already supplies the minus sign. The [static reference](icons.md) lists all 92 static components and their exact theme keys, preserving the historical `ChatBubbles` component name.

## Added baseline

| Workflow | New theme keys |
| --- | --- |
| Navigation and history | `home`, `arrowLeft`, `arrowRight`, `arrowUp`, `arrowDown`, `externalLink`, `refresh`, `undo`, `redo`, `link` |
| Status and feedback | `check`, `checkCircle`, `info`, `warning`, `error` |
| Authentication, security and visibility | `lock`, `unlock`, `login`, `logout`, `shield`, `key`, `eye`, `eyeOff` |
| Files and persistence | `folder`, `upload`, `save`, `archive`, `attachment`, `clipboard`, `printer` |
| Media and capture | `image`, `camera`, `play`, `pause`, `stop`, `volume`, `volumeOff`, `microphone`, `video` |
| Communication | `mail`, `phone`, `share` |
| Commerce | `cart`, `creditCard`, `tag` |
| Layout and analytics | `list`, `table`, `columns`, `barChart`, `lineChart`, `pieChart` |
| Connectivity and development | `wifi`, `globe`, `cloud`, `database`, `code`, `terminal` |
| Location and personal organization | `mapPin`, `heart`, `bookmark` |

These complement rather than rename existing glyphs: full-shaft arrows are not chevrons; a circled error is not the dismiss X; a bulleted list is not the menu; clipboard is not copy; upload complements download; dashboard is retained rather than adding a synonym. `save` explicitly depicts a floppy disk while the existing document-like `file` remains unchanged for compatibility.

The baseline covers the workflows above, but specialized domains, brands, device families, weather, social networks, rich-text formatting, every sort/alignment option, and all on/off or directional permutations are out of scope. Future additions should be driven by actual UI needs, not a claim of unlimited completeness.

## Animation coverage

All 60 additions are **static only**. Play-once coverage remains: cancel, chat, four chevrons, light bulb, notifications, plus, search, settings, star, stopwatch, submit and trash. Continuous coverage is the same set plus spinner. New static entries do not imply new `animated` or `continuous` properties. Existing animation timing, hover behavior and glyph geometry are unchanged.

## Path architecture

- SVG roots use the shared `1024 × 1024` dimensions. Coordinates are percentages of the drawing area after `64` units of padding on each side: `scale(p) = 64 + p × 896 / 100`. `rscale(p) = p × 896 / 100` scales radii without translating them. Both axes currently use the shared width-based scale, appropriate for this square canvas.
- `Start`, `LineTo`, `ArcTo`, and `Close` describe absolute `M`, `L`, `A`, and `Z` commands. They return strings when called by `Path`; they are not SVG elements rendered independently.
- `Path` reduces its flat child array in order, passing each child's accumulated `pathString` to the next primitive. Repeated `Start` commands create separate subpaths. A circle uses two semicircular arcs because a single arc with coincident endpoints cannot describe a full circle.
- `ArcTo` defaults `ry` to `rx`, rotation to zero, large-arc to false, and sweep to true. Explicit `sweep={false}` selects the opposite direction. Geometry is authored as declarative TSX, not raw SVG `d` strings or imported icon packages.
- `Path` forwards `className`, maps `weight` to stroke widths `16 / 24 / 32`, defaults `color` to black, and uses `fillColor` (default black) only when `fill` is true. Roots also receive the class. A theme factory closes over the configuration and returns a zero-argument component; it does not merge runtime override props.
- Children must be a flat array of callable primitive elements. Fragments, conditionals producing null, nested arrays and arbitrary DOM children are not supported by the current reducer. New icons keep that contract; no Path refactor was needed.
- The glyphs are outline-first. Filling is a styling facility applied to all paths, not a separately optimized solid icon family. Filled multi-part shapes can hide interior marks. Width, height and accessibility attributes are not part of `IconProps`; size with CSS and label the surrounding control.

## Integration and verification

`index.tsx` explicitly exports each new static component and registers its factory in `createTheme`. The preview recursively enumerates theme entries and therefore discovers the additions without a second hand-maintained catalog. `npm run generate-png` discovers static entries, intentionally excludes animation groups, and reuses one Chromium browser to generate the [PNG examples](../examples/README.md). See [generation setup](development.md#generate-icon-examples).

The Node-based test command uses `tsx` and React server rendering. The initial HomeIcon contract test failed for the missing export, then passed after implementation; expanding the same established contract to the remaining baseline produced 59 missing-export failures before those modules were added. A subsequent visual review caught the refresh arc; a failing geometry regression preceded its correction.

The suite checks:

- Each of the 60 additions through direct root export, module factory and themed component, with custom class, color, weight and fill plus default/fallback behavior.
- All 123 public icon components and corresponding theme geometry, including existing animations. Animation instances have random CSS identifiers, so comparison deliberately uses path markup instead of whole-document equality.
- All public icon components' custom stroke, fill, weight and class propagation.
- Every emitted path with an SVG path parser, including finite numeric geometry and a starting move command.
- Static-module/theme parity and exact catalog counts, to catch forgotten registration.
- Percentage and radius scaling, ordered primitive reduction, elliptical arc flags/rotation, defaults and multiple subpaths.

`npm run typecheck` covers the library, tests and gallery. The preview's full TypeScript/Vite build is also checked. Seven pre-existing unused declarations/imports in plus, settings and spinner variants were removed to let the preview's stricter unused-symbol checks pass; no existing geometry or behavior changed.

`npm run gallery` generates `/tmp/react-icons-gallery/index.html` from actual server-rendered components. It contains all 92 static icons with labels. A screenshot can be generated with an installed Chromium:

```bash
chromium --headless --no-sandbox --disable-gpu \
  --screenshot=/tmp/react-icons-gallery/contact-sheet.png \
  --window-size=1280,1700 file:///tmp/react-icons-gallery/index.html
```

Use `--no-sandbox` only in a trusted isolated environment when necessary; omit it on normally sandboxed desktops. Temporary gallery HTML, review screenshots and build output remain untracked. The PNGs and generated catalog in `examples/` are tracked documentation assets. Animation playback is not visually validated by a static contact sheet. The tests validate SSR output, not hydration behavior or animation timing.
