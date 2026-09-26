import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Database cylinder. */
export function DatabaseIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={15} y={24} />
        <ArcTo x={85} y={24} rx={35} ry={12} />
        <ArcTo x={15} y={24} rx={35} ry={12} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={15} y={24} />
        <LineTo x={15} y={77} />
        <ArcTo x={85} y={77} rx={35} ry={12} sweep={false} />
        <LineTo x={85} y={24} />
      </Path>
      <Path {...props}>
        <Start x={15} y={50} />
        <ArcTo x={85} y={50} rx={35} ry={12} sweep={false} />
      </Path>
    </svg>
  );
}

export const genDatabaseIcon = (config: IconProps) => () => <DatabaseIcon {...config} />;
