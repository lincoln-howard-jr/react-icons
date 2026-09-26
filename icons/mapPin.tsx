import { ArcTo, Close, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Location marker. */
export function MapPinIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={92} />
        <ArcTo x={18} y={40} rx={70} />
        <ArcTo x={82} y={40} rx={32} />
        <ArcTo x={50} y={92} rx={70} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={38} y={38} />
        <ArcTo x={62} y={38} rx={12} />
        <ArcTo x={38} y={38} rx={12} />
        <Close />
      </Path>
    </svg>
  );
}

export const genMapPinIcon = (config: IconProps) => () => <MapPinIcon {...config} />;
