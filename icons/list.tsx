import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Bulleted list, distinct from the menu glyph. */
export function ListIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={12} y={25} />
        <ArcTo x={18} y={25} rx={3} />
        <ArcTo x={12} y={25} rx={3} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={12} y={50} />
        <ArcTo x={18} y={50} rx={3} />
        <ArcTo x={12} y={50} rx={3} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={12} y={75} />
        <ArcTo x={18} y={75} rx={3} />
        <ArcTo x={12} y={75} rx={3} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={30} y={25} />
        <LineTo x={88} y={25} />
      </Path>
      <Path {...props}>
        <Start x={30} y={50} />
        <LineTo x={88} y={50} />
      </Path>
      <Path {...props}>
        <Start x={30} y={75} />
        <LineTo x={88} y={75} />
      </Path>
    </svg>
  );
}

export const genListIcon = (config: IconProps) => () => <ListIcon {...config} />;
