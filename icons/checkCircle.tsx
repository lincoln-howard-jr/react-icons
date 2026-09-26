import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Confirmed status in a circle. */
export function CheckCircleIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={50} />
        <ArcTo x={90} y={50} rx={40} />
        <ArcTo x={10} y={50} rx={40} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={28} y={50} />
        <LineTo x={44} y={66} />
        <LineTo x={73} y={35} />
      </Path>
    </svg>
  );
}

export const genCheckCircleIcon = (config: IconProps) => () => <CheckCircleIcon {...config} />;
