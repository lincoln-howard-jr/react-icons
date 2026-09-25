import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Vertical bar chart. */
export function BarChartIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={10} />
        <LineTo x={10} y={90} />
        <LineTo x={94} y={90} />
      </Path>
      <Path {...props}>
        <Start x={23} y={55} />
        <LineTo x={37} y={55} />
        <LineTo x={37} y={90} />
        <LineTo x={23} y={90} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={48} y={35} />
        <LineTo x={62} y={35} />
        <LineTo x={62} y={90} />
        <LineTo x={48} y={90} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={73} y={15} />
        <LineTo x={87} y={15} />
        <LineTo x={87} y={90} />
        <LineTo x={73} y={90} />
        <Close />
      </Path>
    </svg>
  );
}

export const genBarChartIcon = (config: IconProps) => () => <BarChartIcon {...config} />;
