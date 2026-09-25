import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Directional arrow with a full shaft. */
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={12} y={50} />
        <LineTo x={88} y={50} />
      </Path>
      <Path {...props}>
        <Start x={60} y={22} />
        <LineTo x={88} y={50} />
        <LineTo x={60} y={78} />
      </Path>
    </svg>
  );
}

export const genArrowRightIcon = (config: IconProps) => () => <ArrowRightIcon {...config} />;
