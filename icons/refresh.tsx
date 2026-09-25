import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Circular refresh arrow. */
export function RefreshIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={90} />
        <ArcTo x={10} y={50} rx={40} />
        <ArcTo x={50} y={10} rx={40} />
        <ArcTo x={90} y={50} rx={40} />
      </Path>
      <Path {...props}>
        <Start x={80} y={38} />
        <LineTo x={90} y={50} />
        <LineTo x={100} y={38} />
      </Path>
    </svg>
  );
}

export const genRefreshIcon = (config: IconProps) => () => <RefreshIcon {...config} />;
