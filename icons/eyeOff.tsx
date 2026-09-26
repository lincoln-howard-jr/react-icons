import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Hidden content. */
export function EyeOffIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={8} y={50} />
        <ArcTo x={92} y={50} rx={50} ry={42} />
        <ArcTo x={8} y={50} rx={50} ry={42} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={37} y={50} />
        <ArcTo x={63} y={50} rx={13} />
        <ArcTo x={37} y={50} rx={13} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={12} y={12} />
        <LineTo x={88} y={88} />
      </Path>
    </svg>
  );
}

export const genEyeOffIcon = (config: IconProps) => () => <EyeOffIcon {...config} />;
