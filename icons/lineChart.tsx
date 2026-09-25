import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Line chart with axes. */
export function LineChartIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={10} />
        <LineTo x={10} y={90} />
        <LineTo x={94} y={90} />
      </Path>
      <Path {...props}>
        <Start x={22} y={70} />
        <LineTo x={42} y={45} />
        <LineTo x={61} y={58} />
        <LineTo x={90} y={20} />
      </Path>
    </svg>
  );
}

export const genLineChartIcon = (config: IconProps) => () => <LineChartIcon {...config} />;
