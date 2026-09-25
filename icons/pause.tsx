import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Pause media. */
export function PauseIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={22} y={15} />
        <LineTo x={40} y={15} />
        <LineTo x={40} y={85} />
        <LineTo x={22} y={85} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={60} y={15} />
        <LineTo x={78} y={15} />
        <LineTo x={78} y={85} />
        <LineTo x={60} y={85} />
        <Close />
      </Path>
    </svg>
  );
}

export const genPauseIcon = (config: IconProps) => () => <PauseIcon {...config} />;
