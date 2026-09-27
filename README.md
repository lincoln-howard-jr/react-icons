# @lincoln-howard-jr/react-icons

Customizable SVG icons for React, with static and animated variants.

## Install

Requires React and React DOM `^19.2.3`. Published to **GitHub Packages**, not npmjs.org:
[configure your registry and authenticate](docs/releases.md#installing-from-github-packages), then install:

```bash
npm install @lincoln-howard-jr/react-icons
```

## Use an icon

```tsx
import { SearchIcon } from "@lincoln-howard-jr/react-icons";

export function SearchButton() {
  return (
    <button aria-label="Search">
      <SearchIcon className="icon" color="currentColor" weight="normal" />
    </button>
  );
}
```

```css
svg.icon { width: 24px; height: 24px; }
```

For shared styling, create a theme:

```tsx
import { createTheme } from "@lincoln-howard-jr/react-icons";

const icons = createTheme({ color: "currentColor", weight: "normal" });

// Render in your component:
<icons.settings />
```

## Browse and generate examples

Browse the [icon examples](examples/README.md). From a repository checkout, regenerate
all static PNGs and their catalog in `examples/`:

```bash
npm ci
npm run generate-png
```

See [browser setup](docs/development.md#generate-icon-examples) if you use system Chromium.
For props, animation and custom icons, see the [usage reference](docs/usage.md).
See [development](docs/development.md) for testing and preview commands.
