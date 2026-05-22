import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

export function DownloadIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      <Path {...props}>
        <Start x={50} y={12} />
        <LineTo x={50} y={58} />
      </Path>
      <Path {...props}>
        <Start x={34} y={42} />
        <LineTo x={50} y={58} />
        <LineTo x={66} y={42} />
      </Path>
      <Path {...props}>
        <Start x={22} y={66} />
        <LineTo x={22} y={78} />
        <ArcTo x={32} y={88} rx={10} />
        <LineTo x={68} y={88} />
        <ArcTo x={78} y={78} rx={10} />
        <LineTo x={78} y={66} />
      </Path>
    </svg>
  );
}

export const genDownloadIcon = (config: IconProps) => () => (
  <DownloadIcon {...config} />
);
