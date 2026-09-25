import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Stop media. */
export function StopIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={18} y={18} />
        <LineTo x={82} y={18} />
        <LineTo x={82} y={82} />
        <LineTo x={18} y={82} />
        <Close />
      </Path>
    </svg>
  );
}

export const genStopIcon = (config: IconProps) => () => <StopIcon {...config} />;
