import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Directional arrow with a full shaft. */
export function ArrowDownIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={12} />
        <LineTo x={50} y={88} />
      </Path>
      <Path {...props}>
        <Start x={22} y={60} />
        <LineTo x={50} y={88} />
        <LineTo x={78} y={60} />
      </Path>
    </svg>
  );
}

export const genArrowDownIcon = (config: IconProps) => () => <ArrowDownIcon {...config} />;
