import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** House with an open doorway. */
export function HomeIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={45} />
        <LineTo x={50} y={10} />
        <LineTo x={90} y={45} />
        <LineTo x={80} y={45} />
        <LineTo x={80} y={90} />
        <LineTo x={60} y={90} />
        <LineTo x={60} y={60} />
        <LineTo x={40} y={60} />
        <LineTo x={40} y={90} />
        <LineTo x={20} y={90} />
        <LineTo x={20} y={45} />
        <Close />
      </Path>
    </svg>
  );
}

export const genHomeIcon = (config: IconProps) => () => <HomeIcon {...config} />;
