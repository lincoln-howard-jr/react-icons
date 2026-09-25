import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Clipboard for paste or tasks. */
export function ClipboardIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={36} y={18} />
        <LineTo x={18} y={18} />
        <LineTo x={18} y={90} />
        <LineTo x={82} y={90} />
        <LineTo x={82} y={18} />
        <LineTo x={64} y={18} />
      </Path>
      <Path {...props}>
        <Start x={36} y={10} />
        <LineTo x={64} y={10} />
        <LineTo x={64} y={28} />
        <LineTo x={36} y={28} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={32} y={45} />
        <LineTo x={68} y={45} />
      </Path>
      <Path {...props}>
        <Start x={32} y={60} />
        <LineTo x={68} y={60} />
      </Path>
      <Path {...props}>
        <Start x={32} y={75} />
        <LineTo x={58} y={75} />
      </Path>
    </svg>
  );
}

export const genClipboardIcon = (config: IconProps) => () => <ClipboardIcon {...config} />;
