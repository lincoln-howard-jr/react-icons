import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Two-column layout. */
export function ColumnsIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={15} />
        <LineTo x={90} y={15} />
        <LineTo x={90} y={85} />
        <LineTo x={10} y={85} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={50} y={15} />
        <LineTo x={50} y={85} />
      </Path>
    </svg>
  );
}

export const genColumnsIcon = (config: IconProps) => () => <ColumnsIcon {...config} />;
