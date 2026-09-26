import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Command-line terminal window. */
export function TerminalIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={8} y={16} />
        <LineTo x={92} y={16} />
        <LineTo x={92} y={84} />
        <LineTo x={8} y={84} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={23} y={35} />
        <LineTo x={40} y={50} />
        <LineTo x={23} y={65} />
      </Path>
      <Path {...props}>
        <Start x={50} y={65} />
        <LineTo x={75} y={65} />
      </Path>
    </svg>
  );
}

export const genTerminalIcon = (config: IconProps) => () => <TerminalIcon {...config} />;
