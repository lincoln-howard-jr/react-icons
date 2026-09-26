import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Directional arrow with a full shaft. */
export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={88} y={50} />
        <LineTo x={12} y={50} />
      </Path>
      <Path {...props}>
        <Start x={40} y={22} />
        <LineTo x={12} y={50} />
        <LineTo x={40} y={78} />
      </Path>
    </svg>
  );
}

export const genArrowLeftIcon = (config: IconProps) => () => <ArrowLeftIcon {...config} />;
