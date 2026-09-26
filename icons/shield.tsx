import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Protective shield. */
export function ShieldIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={8} />
        <LineTo x={86} y={22} />
        <LineTo x={82} y={55} />
        <ArcTo x={50} y={92} rx={54} />
        <ArcTo x={18} y={55} rx={54} />
        <LineTo x={14} y={22} />
        <Close />
      </Path>
    </svg>
  );
}

export const genShieldIcon = (config: IconProps) => () => <ShieldIcon {...config} />;
