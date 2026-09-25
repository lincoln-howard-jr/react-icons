# @lincoln-howard-jr/react-icons

A lightweight, customizable SVG icon library for React. Icons are built declaratively using a composable `Path` component system with support for static, animated (play-once), and continuously animated variants.

## Install

Packages are published to **GitHub Packages**, not npmjs.org. Configure the
`@lincoln-howard-jr` scope and authenticate before installing; see
[registry setup and release instructions](docs/releases.md).

```bash
npm install @lincoln-howard-jr/react-icons
```

> **Peer dependencies:** `react` ^19.2.3, `react-dom` ^19.2.3

## Available Icons

92 static icons, 15 play-once variants and 16 continuous variants. The 60 new app-development icons are **static additions**; animation coverage remains selective. See the [coverage audit](docs/icon-coverage.md) for the bounded baseline and architecture.

| Theme key | Component | Description |
| --- | --- | --- |
| `archive` | `ArchiveIcon` | Archive box with lid and handle. |
| `arrowDown` | `ArrowDownIcon` | Directional arrow with a full shaft. |
| `arrowLeft` | `ArrowLeftIcon` | Directional arrow with a full shaft. |
| `arrowRight` | `ArrowRightIcon` | Directional arrow with a full shaft. |
| `arrowUp` | `ArrowUpIcon` | Directional arrow with a full shaft. |
| `attachment` | `AttachmentIcon` | Paperclip attachment. |
| `barChart` | `BarChartIcon` | Vertical bar chart. |
| `book` | `BookIcon` | Open book |
| `bookmark` | `BookmarkIcon` | Bookmark ribbon. |
| `calendar` | `CalendarIcon` | Calendar |
| `camera` | `CameraIcon` | Camera body and lens. |
| `cancel` | `CancelIcon` | X / close |
| `cart` | `CartIcon` | Shopping cart with wheels. |
| `chat` | `ChatBubbles` | Chat bubbles |
| `check` | `CheckIcon` | Confirmation check mark. |
| `checkCircle` | `CheckCircleIcon` | Confirmed status in a circle. |
| `chevronDown` | `ChevronDownIcon` | Downward chevron |
| `chevronLeft` | `ChevronLeftIcon` | Left chevron |
| `chevronRight` | `ChevronRightIcon` | Right chevron |
| `chevronUp` | `ChevronUpIcon` | Upward chevron |
| `clipboard` | `ClipboardIcon` | Clipboard for paste or tasks. |
| `cloud` | `CloudIcon` | Cloud storage or service. |
| `code` | `CodeIcon` | Code brackets with slash. |
| `columns` | `ColumnsIcon` | Two-column layout. |
| `copy` | `CopyIcon` | Duplicate overlapping sheets |
| `creditCard` | `CreditCardIcon` | Payment card with magnetic stripe. |
| `dash` | `DashIcon` | Dashboard / panel grid (not a minus sign) |
| `database` | `DatabaseIcon` | Database cylinder. |
| `dotsHorizontal` | `DotsHorizontalIcon` | Horizontal ellipsis |
| `dotsVertical` | `DotsVerticalIcon` | Vertical ellipsis |
| `download` | `DownloadIcon` | Download to a tray |
| `error` | `ErrorIcon` | Error status in a circle, distinct from dismiss. |
| `externalLink` | `ExternalLinkIcon` | Open in another window. |
| `eye` | `EyeIcon` | Visible content. |
| `eyeOff` | `EyeOffIcon` | Hidden content. |
| `file` | `FileIcon` | Document |
| `filter` | `FilterIcon` | Filter funnel |
| `folder` | `FolderIcon` | File folder. |
| `globe` | `GlobeIcon` | Global or language selection. |
| `heart` | `HeartIcon` | Heart for likes or favorites. |
| `home` | `HomeIcon` | House with an open doorway. |
| `image` | `ImageIcon` | Landscape image frame. |
| `info` | `InfoIcon` | Information status in a circle. |
| `key` | `KeyIcon` | Access key with two teeth. |
| `lightBulb` | `LightBulbIcon` | Light bulb |
| `lineChart` | `LineChartIcon` | Line chart with axes. |
| `link` | `LinkIcon` | Interlocking chain links. |
| `list` | `ListIcon` | Bulleted list, distinct from the menu glyph. |
| `lock` | `LockIcon` | Closed padlock. |
| `login` | `LoginIcon` | Arrow entering a doorway. |
| `logout` | `LogoutIcon` | Arrow leaving a doorway. |
| `mail` | `MailIcon` | Envelope for email. |
| `mapPin` | `MapPinIcon` | Location marker. |
| `menu` | `MenuIcon` | Menu / hamburger |
| `microphone` | `MicrophoneIcon` | Microphone on a stand. |
| `notifications` | `NotificationsIcon` | Bell / notifications |
| `pause` | `PauseIcon` | Pause media. |
| `pen` | `PenIcon` | Pen / edit |
| `phone` | `PhoneIcon` | Telephone handset. |
| `pieChart` | `PieChartIcon` | Pie chart with a separated quarter. |
| `play` | `PlayIcon` | Play media. |
| `plus` | `PlusIcon` | Plus sign |
| `printer` | `PrinterIcon` | Printer with a paper output tray. |
| `questionMark` | `QuestionMarkIcon` | Question mark |
| `redo` | `RedoIcon` | Redo with a curved right arrow. |
| `refresh` | `RefreshIcon` | Circular refresh arrow. |
| `remove` | `RemoveIcon` | Remove / minus |
| `ruler` | `RulerIcon` | Ruler |
| `save` | `SaveIcon` | Floppy disk save action. |
| `search` | `SearchIcon` | Magnifying glass |
| `settings` | `SettingsIcon` | Gear / settings |
| `share` | `ShareIcon` | Three connected sharing nodes. |
| `shield` | `ShieldIcon` | Protective shield. |
| `shrug` | `ShrugIcon` | Shrug / unknown |
| `spinner` | `SpinnerIcon` | Loading arc |
| `star` | `StarIcon` | 5-pointed star |
| `stop` | `StopIcon` | Stop media. |
| `stopwatch` | `StopwatchIcon` | Stopwatch / timer |
| `submit` | `SubmitIcon` | Submit / send |
| `table` | `TableIcon` | Table with header row and columns. |
| `tag` | `TagIcon` | Price or category tag. |
| `terminal` | `TerminalIcon` | Command-line terminal window. |
| `trash` | `TrashIcon` | Trash can / delete |
| `undo` | `UndoIcon` | Undo with a curved left arrow. |
| `unlock` | `UnlockIcon` | Open padlock. |
| `upload` | `UploadIcon` | Upload arrow above a tray. |
| `user` | `UserIcon` | User silhouette |
| `video` | `VideoIcon` | Video camera. |
| `volume` | `VolumeIcon` | Speaker with sound waves. |
| `volumeOff` | `VolumeOffIcon` | Muted speaker. |
| `warning` | `WarningIcon` | Warning triangle with exclamation mark. |
| `wifi` | `WifiIcon` | Wireless signal. |

## Usage

### Themed icon set with `createTheme`

Use `createTheme` to generate a full set of icons that share the same styling:

```tsx
import { createTheme } from "@lincoln-howard-jr/react-icons";

const icons = createTheme({
  color: "#333",
  weight: "normal",
});

function Toolbar() {
  return (
    <nav>
      <icons.search />
      <icons.settings />
      <icons.notifications />
      <icons.user />
    </nav>
  );
}
```

The returned object includes every icon as a zero-argument component — ready to render.

### Animated icons (play once)

Animated icons play their animation a single time when mounted (or on hover):

```tsx
import {
  AnimatedStarIcon,
  AnimatedSearchIcon,
} from "@lincoln-howard-jr/react-icons";

function Feedback() {
  return (
    <div>
      {/* Plays twinkle animation once on mount */}
      <AnimatedStarIcon
        color="gold"
        fill
        fillColor="gold"
        animationDuration={0.8}
      />

      {/* Plays animation on hover instead of on mount */}
      <AnimatedSearchIcon color="steelblue" animateOnHover />
    </div>
  );
}
```

Animated icons are also available on a themed set:

```tsx
const icons = createTheme({ color: '#333', weight: 'normal' });

// Single-play animated
<icons.animated.star />
<icons.animated.trash />
```

### Continuously animated icons

These loop their animation infinitely — useful for loading states or persistent indicators:

```tsx
const icons = createTheme({ color: "#555", weight: "normal" });

function Loading() {
  return <icons.continuous.stopwatch />;
}
```

## Props

All icons accept the `IconProps` type:

| Prop                | Type                            | Default    | Description                                                          |
| ------------------- | ------------------------------- | ---------- | -------------------------------------------------------------------- |
| `className`         | `string`                        | —          | CSS class applied to the SVG and its paths                           |
| `color`             | `string`                        | `'black'`  | Stroke color                                                         |
| `weight`            | `'thin' \| 'normal' \| 'thick'` | `'normal'` | Stroke width (`16`, `24`, or `32` respectively)                      |
| `fill`              | `boolean`                       | `false`    | Whether to fill the icon shape                                       |
| `fillColor`         | `string`                        | `'black'`  | Fill color (only applies when `fill` is `true`)                      |
| `animationDuration` | `number`                        | `1`        | Duration in seconds (animated icons only)                            |
| `animateOnHover`    | `boolean`                       | `false`    | Trigger animation on hover instead of on mount (animated icons only) |

## Building custom icons

Icons are built with a declarative `Path` component that converts coordinate percentages (0–100) into SVG path data on a 1024x1024 viewBox:

```tsx
import {
  Path,
  Start,
  LineTo,
  ArcTo,
  Close,
} from "@lincoln-howard-jr/react-icons/components/Path";
import {
  IconProps,
  dimensions,
} from "@lincoln-howard-jr/react-icons/icons/IconProps";

export function HeartIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      <Path {...props}>
        <Start x={50} y={90} />
        <LineTo x={10} y={50} />
        <ArcTo x={50} y={20} rx={28} />
        <ArcTo x={90} y={50} rx={28} />
        <Close />
      </Path>
    </svg>
  );
}
```

### Path primitives

| Component | Props                                                       | Description              |
| --------- | ----------------------------------------------------------- | ------------------------ |
| `Start`   | `x`, `y`                                                    | Move to a starting point |
| `LineTo`  | `x`, `y`                                                    | Draw a straight line     |
| `ArcTo`   | `x`, `y`, `rx`, `ry?`, `xAxisRotation?`, `sweep?`, `large?` | Draw an elliptical arc   |
| `Close`   | —                                                           | Close the current path   |

All `x`/`y` values are percentages (0–100) of the padded drawing area: `64 + percentage * 896 / 100`. Arc radii use `percentage * 896 / 100` without padding. `Path` consumes a flat array of primitive children; avoid fragments and nested arrays inside it. See [Path architecture and limits](docs/icon-coverage.md#path-architecture).

## Development and visual review

```bash
PUPPETEER_SKIP_DOWNLOAD=true npm ci
npm test
npm run typecheck
npm run test:package                    # builds, packs, checks isolated consumers
npm run gallery                         # /tmp/react-icons-gallery/index.html
npm run gallery -- /tmp/my-icon-review   # optional output directory
npm --prefix preview-client ci
npm --prefix preview-client run build
npm run preview
```

Tests server-render every public icon and its theme counterpart, validate SVG path syntax, check styling and factories, and cover the Path primitives. The HTML contact sheet renders the actual static components, not separate artwork. Generated galleries and screenshots should remain outside the repository. The existing preview automatically discovers new theme keys; the legacy Bun PNG CLI also enumerates static theme keys, but skips nested animation groups and launches one browser per icon. Prefer the single HTML gallery for bulk review.

The preview now consumes compiled `dist/`; run `npm run build` after library changes.
See [quality checks, package compatibility and releases](docs/releases.md) for CI
permissions, supported Node versions and the release procedure.

Factories bind their configuration once; returned theme components take no override props. Style an icon directly or rebuild the theme to change its configuration. These are outline-first glyphs: `fill` is forwarded to every path, not a separately designed solid variant, so filling multi-part icons can obscure internal detail. Provide accessible text on the surrounding control (for example, a labeled button); icons do not generate accessible names themselves.

## License

ISC
