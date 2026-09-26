import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Confirmation check mark. */
export function CheckIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={15} y={50} />
        <LineTo x={40} y={75} />
        <LineTo x={85} y={25} />
      </Path>
    </svg>
  );
}

export const genCheckIcon = (config: IconProps) => () => <CheckIcon {...config} />;
