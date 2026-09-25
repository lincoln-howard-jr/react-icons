import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Play media. */
export function PlayIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={28} y={12} />
        <LineTo x={88} y={50} />
        <LineTo x={28} y={88} />
        <Close />
      </Path>
    </svg>
  );
}

export const genPlayIcon = (config: IconProps) => () => <PlayIcon {...config} />;
