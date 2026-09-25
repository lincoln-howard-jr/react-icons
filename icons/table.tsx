import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Table with header row and columns. */
export function TableIcon(props: IconProps) {
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
        <Start x={10} y={36} />
        <LineTo x={90} y={36} />
      </Path>
      <Path {...props}>
        <Start x={10} y={60} />
        <LineTo x={90} y={60} />
      </Path>
      <Path {...props}>
        <Start x={36} y={15} />
        <LineTo x={36} y={85} />
      </Path>
      <Path {...props}>
        <Start x={64} y={15} />
        <LineTo x={64} y={85} />
      </Path>
    </svg>
  );
}

export const genTableIcon = (config: IconProps) => () => <TableIcon {...config} />;
