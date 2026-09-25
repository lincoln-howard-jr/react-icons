import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Pie chart with a separated quarter. */
export function PieChartIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={44} y={12} />
        <ArcTo x={88} y={56} rx={38} large={true} sweep={false} />
        <LineTo x={44} y={56} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={56} y={8} />
        <LineTo x={56} y={44} />
        <LineTo x={92} y={44} />
        <ArcTo x={56} y={8} rx={36} sweep={false} />
        <Close />
      </Path>
    </svg>
  );
}

export const genPieChartIcon = (config: IconProps) => () => <PieChartIcon {...config} />;
