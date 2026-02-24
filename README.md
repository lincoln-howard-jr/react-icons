# @lincoln-howard-jr/react-icons

A lightweight, customizable SVG icon library for React. Icons are built declaratively using a composable `Path` component system with support for static, animated (play-once), and continuously animated variants.

## Install

```bash
npm install @lincoln-howard-jr/react-icons
```

> **Peer dependencies:** `react` ^18.2.0, `react-dom` ^18.2.0

## Available Icons

| Icon           | Component            | Description          |
| -------------- | -------------------- | -------------------- |
| Book           | `BookIcon`           | Open book            |
| Calendar       | `CalendarIcon`       | Calendar             |
| Cancel         | `CancelIcon`         | X / close            |
| Chat           | `ChatBubbles`        | Chat bubbles         |
| ChevronDown    | `ChevronDownIcon`    | Downward chevron     |
| ChevronLeft    | `ChevronLeftIcon`    | Left chevron         |
| ChevronRight   | `ChevronRightIcon`   | Right chevron        |
| ChevronUp      | `ChevronUpIcon`      | Upward chevron       |
| Dash           | `DashIcon`           | Horizontal dash      |
| DotsHorizontal | `DotsHorizontalIcon` | Horizontal ellipsis  |
| DotsVertical   | `DotsVerticalIcon`   | Vertical ellipsis    |
| Filter         | `FilterIcon`         | Filter funnel        |
| LightBulb      | `LightBulbIcon`      | Light bulb           |
| Notifications  | `NotificationsIcon`  | Bell / notifications |
| Pen            | `PenIcon`            | Pen / edit           |
| Plus           | `PlusIcon`           | Plus sign            |
| QuestionMark   | `QuestionMarkIcon`   | Question mark        |
| Remove         | `RemoveIcon`         | Remove / minus       |
| Ruler          | `RulerIcon`          | Ruler                |
| Search         | `SearchIcon`         | Magnifying glass     |
| Settings       | `SettingsIcon`       | Gear / settings      |
| Star           | `StarIcon`           | 5-pointed star       |
| Stopwatch      | `StopwatchIcon`      | Stopwatch / timer    |
| Submit         | `SubmitIcon`         | Submit / send        |
| Trash          | `TrashIcon`          | Trash can / delete   |
| User           | `UserIcon`           | User silhouette      |

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

All `x`/`y` values are percentages (0–100) of the icon canvas.

## License

ISC
