import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Camera body and lens. */
export function CameraIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={30} />
        <LineTo x={30} y={30} />
        <LineTo x={38} y={16} />
        <LineTo x={62} y={16} />
        <LineTo x={70} y={30} />
        <LineTo x={90} y={30} />
        <LineTo x={90} y={84} />
        <LineTo x={10} y={84} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={30} y={55} />
        <ArcTo x={70} y={55} rx={20} />
        <ArcTo x={30} y={55} rx={20} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={76} y={40} />
        <LineTo x={83} y={40} />
      </Path>
    </svg>
  );
}

export const genCameraIcon = (config: IconProps) => () => <CameraIcon {...config} />;
