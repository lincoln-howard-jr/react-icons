// components/Path.tsx
import { createContext, useContext, useMemo, useState } from "react";

// icons/IconProps.ts
var weights = {
  thin: 12,
  normal: 16,
  thick: 20
};
var dimensions = {
  width: 512,
  height: 512,
  padding: 28
};
function scale(percentage) {
  return dimensions.padding + percentage * (dimensions.width - 2 * dimensions.padding) / 100;
}
function rscale(percentage) {
  return percentage * (dimensions.width - 2 * dimensions.padding) / 100;
}
var rotate = (x, y, angle = -Math.PI / 4) => {
  const cx = 50;
  const cy = 50;
  const dx = x - cx;
  const dy = y - cy;
  const r = Math.sqrt(dx * dx + dy * dy);
  const theta = Math.atan2(dy, dx) + angle;
  return {
    x: cx + r * Math.cos(theta),
    y: cy + r * Math.sin(theta)
  };
};

// components/Path.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var PathContext = createContext({
  start: () => {
  },
  addLineTo: () => {
  },
  addArcTo: () => {
  },
  close: () => {
  }
});
function Path(props) {
  const [pathString, setPathString] = useState("");
  const start = (x, y) => {
    setPathString((pathString2) => `${pathString2} M ${scale(x)} ${scale(y)}`);
  };
  const addLineTo = (x, y) => {
    setPathString((pathString2) => `${pathString2} L ${scale(x)} ${scale(y)}`);
  };
  const addArcTo = (x, y, rx, ry, reverse) => {
    setPathString((pathString2) => `${pathString2} A ${rscale(rx)} ${rscale(ry ?? rx)} 0 ${reverse ? 1 : 0} 1 ${scale(x)} ${scale(y)}`);
  };
  const close = () => {
    setPathString((pathString2) => `${pathString2} Z`);
  };
  const ctx = {
    start,
    addLineTo,
    addArcTo,
    close
  };
  return /* @__PURE__ */ jsxs(PathContext.Provider, { value: ctx, children: [
    /* @__PURE__ */ jsx("path", { className: props.className, strokeWidth: weights[props.weight || "normal"], stroke: props.color || "black", fill: "none", d: pathString }),
    props.children
  ] });
}
var Start = function(props) {
  const ctx = useContext(PathContext);
  useMemo(() => {
    ctx.start(props.x, props.y);
  }, []);
  return null;
};
var LineTo = function(props) {
  const ctx = useContext(PathContext);
  useMemo(() => {
    ctx.addLineTo(props.x, props.y);
  }, []);
  return null;
};
var ArcTo = function(props) {
  const ctx = useContext(PathContext);
  useMemo(() => {
    ctx.addArcTo(props.x, props.y, props.rx, props.ry, props.reverse);
  }, []);
  return null;
};
var Close = function() {
  const ctx = useContext(PathContext);
  useMemo(() => {
    ctx.close();
  }, []);
  return null;
};

// icons/cancel.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CancelIcon = (props) => /* @__PURE__ */ jsx2("svg", { viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, children: /* @__PURE__ */ jsxs2(Path, { color: props.color, className: props.className, children: [
  /* @__PURE__ */ jsx2(Start, { x: 12, y: 3 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 50, y: 43 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 88, y: 3 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 97, y: 12 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 57, y: 50 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 95, y: 90 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 88, y: 97 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 50, y: 57 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 12, y: 95 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 3, y: 88 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 43, y: 50 }),
  /* @__PURE__ */ jsx2(LineTo, { x: 3, y: 12 }),
  /* @__PURE__ */ jsx2(Close, {})
] }) });
var genCancelIcon = (config) => () => /* @__PURE__ */ jsx2(CancelIcon, { ...config });

// icons/pen.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var start1 = rotate(0, 50);
var line1 = rotate(15, 40);
var line2 = rotate(90, 40);
var line3 = rotate(90, 60);
var line4 = rotate(15, 60);
var line5 = rotate(0, 50);
var start2 = rotate(20, 40);
var line6 = rotate(20, 60);
var start3 = rotate(90, 40);
var arc1 = rotate(90, 60);
var arcR = dimensions.width / 500;
function PenIcon(props) {
  return /* @__PURE__ */ jsxs3("svg", { viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, children: [
    /* @__PURE__ */ jsxs3(Path, { ...props, children: [
      /* @__PURE__ */ jsx3(Start, { ...start1 }),
      /* @__PURE__ */ jsx3(LineTo, { ...line1 }),
      /* @__PURE__ */ jsx3(LineTo, { ...line2 }),
      /* @__PURE__ */ jsx3(LineTo, { ...line3 }),
      /* @__PURE__ */ jsx3(LineTo, { ...line4 }),
      /* @__PURE__ */ jsx3(LineTo, { ...line5 }),
      /* @__PURE__ */ jsx3(Close, {})
    ] }),
    /* @__PURE__ */ jsxs3(Path, { ...props, children: [
      /* @__PURE__ */ jsx3(Start, { ...start2 }),
      /* @__PURE__ */ jsx3(LineTo, { ...line6 })
    ] }),
    /* @__PURE__ */ jsxs3(Path, { ...props, children: [
      /* @__PURE__ */ jsx3(Start, { ...start3 }),
      /* @__PURE__ */ jsx3(ArcTo, { ...arc1, rx: arcR })
    ] })
  ] });
}
var genPenIcon = (config) => () => /* @__PURE__ */ jsx3(PenIcon, { ...config });

// icons/chat.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var start12 = rotate(35, 92, 0);
var line12 = rotate(45, 75, 0);
var arc12 = rotate(50, 15, 0);
var arc2 = rotate(60, 75, 0);
function ChatBubbles(props) {
  return /* @__PURE__ */ jsx4("svg", { viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, children: /* @__PURE__ */ jsxs4(Path, { ...props, children: [
    /* @__PURE__ */ jsx4(Start, { ...start12 }),
    /* @__PURE__ */ jsx4(LineTo, { ...line12 }),
    /* @__PURE__ */ jsx4(ArcTo, { ...arc12, rx: 40, ry: 30 }),
    /* @__PURE__ */ jsx4(ArcTo, { ...arc2, rx: 40, ry: 30 }),
    /* @__PURE__ */ jsx4(Close, {})
  ] }) });
}
var genChatBubblesIcon = (config) => () => /* @__PURE__ */ jsx4(ChatBubbles, { ...config });

// icons/settings.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var innerCircleStart = rotate(50, 65, 0);
var innerCircleTop = rotate(50, 35, 0);
var innerCircleRadius = 15;
var outerCircleRadius = 0;
var gears = new Array(8).fill(Math.PI).map((pi, i) => ({
  start: rotate(20, 50, i * pi / 4 - pi / 8),
  line1: rotate(10, 50, i * pi / 4 - pi / 8 + pi / 40),
  line2: rotate(10, 50, i * pi / 4 - pi / 40),
  line3: rotate(20, 50, i * pi / 4),
  end: rotate(20, 50, (i + 1) * pi / 4 - pi / 8)
}));
function SettingsIcon(props) {
  return /* @__PURE__ */ jsx5("svg", { viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, children: /* @__PURE__ */ jsxs5(Path, { ...props, children: [
    /* @__PURE__ */ jsx5(Start, { ...innerCircleStart }),
    /* @__PURE__ */ jsx5(ArcTo, { ...innerCircleTop, rx: innerCircleRadius }),
    /* @__PURE__ */ jsx5(ArcTo, { ...innerCircleStart, rx: innerCircleRadius }),
    /* @__PURE__ */ jsx5(Start, { ...gears[0].start }),
    gears.map((gear) => /* @__PURE__ */ jsxs5(Fragment, { children: [
      /* @__PURE__ */ jsx5(LineTo, { ...gear.line1 }),
      /* @__PURE__ */ jsx5(LineTo, { ...gear.line2 }),
      /* @__PURE__ */ jsx5(LineTo, { ...gear.line3 }),
      /* @__PURE__ */ jsx5(ArcTo, { ...gear.end, rx: outerCircleRadius })
    ] })),
    /* @__PURE__ */ jsx5(Close, {})
  ] }) });
}
var genSettingsIcon = (config) => () => /* @__PURE__ */ jsx5(SettingsIcon, { ...config });

// icons/user.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function UserIcon(props) {
  return /* @__PURE__ */ jsx6("svg", { viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, children: /* @__PURE__ */ jsxs6(Path, { ...props, children: [
    /* @__PURE__ */ jsx6(Start, { x: 30, y: 30 }),
    /* @__PURE__ */ jsx6(ArcTo, { x: 70, y: 30, rx: 20 }),
    /* @__PURE__ */ jsx6(ArcTo, { x: 50, y: 50, rx: 20 }),
    /* @__PURE__ */ jsx6(ArcTo, { x: 85, y: 90, rx: 40 }),
    /* @__PURE__ */ jsx6(LineTo, { x: 15, y: 90 }),
    /* @__PURE__ */ jsx6(ArcTo, { x: 50, y: 50, rx: 40 }),
    /* @__PURE__ */ jsx6(ArcTo, { x: 30, y: 30, rx: 20 }),
    /* @__PURE__ */ jsx6(Close, {})
  ] }) });
}
var genUserIcon = (config) => () => /* @__PURE__ */ jsx6(UserIcon, { ...config });

// icons/book.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function BookIcon(props) {
  return /* @__PURE__ */ jsxs7("svg", { viewBox: `0 0 ${dimensions.width} ${dimensions.height}`, children: [
    /* @__PURE__ */ jsxs7(Path, { ...props, children: [
      /* @__PURE__ */ jsx7(Start, { x: 5, y: 20 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 20, y: 20 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 20, y: 12.5 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 35, y: 12.5 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 35, y: 5 }),
      /* @__PURE__ */ jsx7(ArcTo, { x: 50, y: 20, rx: 15, ry: 15 }),
      /* @__PURE__ */ jsx7(ArcTo, { x: 80, y: 12.5, rx: 40, ry: 40 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 80, y: 20 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 95, y: 20 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 95, y: 90 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 60, y: 90 }),
      /* @__PURE__ */ jsx7(ArcTo, { x: 50, y: 94, rx: 15, ry: 15 }),
      /* @__PURE__ */ jsx7(ArcTo, { x: 40, y: 90, rx: 15, ry: 15 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 5, y: 90 }),
      /* @__PURE__ */ jsx7(Close, {})
    ] }),
    /* @__PURE__ */ jsxs7(Path, { ...props, children: [
      /* @__PURE__ */ jsx7(Start, { x: 80, y: 20 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 80, y: 80 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 55, y: 80 }),
      /* @__PURE__ */ jsx7(ArcTo, { x: 45, y: 80, rx: 7.5, ry: 7.5 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 20, y: 80 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 20, y: 20 })
    ] }),
    /* @__PURE__ */ jsxs7(Path, { ...props, children: [
      /* @__PURE__ */ jsx7(Start, { x: 50, y: 20 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 50, y: 80 })
    ] }),
    /* @__PURE__ */ jsxs7(Path, { ...props, children: [
      /* @__PURE__ */ jsx7(Start, { x: 35, y: 12.5 }),
      /* @__PURE__ */ jsx7(LineTo, { x: 35, y: 65 }),
      /* @__PURE__ */ jsx7(ArcTo, { x: 50, y: 80, rx: 15, ry: 15 })
    ] })
  ] });
}
var genBookIcon = (config) => () => /* @__PURE__ */ jsx7(BookIcon, { ...config });

// index.ts
var createTheme = (theme) => ({
  cancel: genCancelIcon(theme),
  pen: genPenIcon(theme),
  chat: genChatBubblesIcon(theme),
  settings: genSettingsIcon(theme),
  user: genUserIcon(theme),
  book: genBookIcon(theme)
});
export {
  CancelIcon,
  ChatBubbles,
  PenIcon,
  SettingsIcon,
  UserIcon,
  createTheme
};
