import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

export function FileIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      <Path {...props}>
        <Start x={20} y={12} />
        <LineTo x={72} y={12} />
        <LineTo x={88} y={28} />
        <LineTo x={88} y={78} />
        <ArcTo x={78} y={88} rx={10} />
        <LineTo x={22} y={88} />
        <ArcTo x={12} y={78} rx={10} />
        <LineTo x={12} y={22} />
        <ArcTo x={20} y={12} rx={8} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={30} y={20} />
        <LineTo x={68} y={20} />
        <LineTo x={68} y={42} />
        <LineTo x={30} y={42} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={30} y={60} />
        <LineTo x={72} y={60} />
      </Path>
      <Path {...props}>
        <Start x={30} y={72} />
        <LineTo x={72} y={72} />
      </Path>
    </svg>
  );
}

export const genFileIcon = (config: IconProps) => () => (
  <FileIcon {...config} />
);
