import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Video camera. */
export function VideoIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={25} />
        <LineTo x={62} y={25} />
        <LineTo x={62} y={75} />
        <LineTo x={10} y={75} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={62} y={40} />
        <LineTo x={90} y={25} />
        <LineTo x={90} y={75} />
        <LineTo x={62} y={60} />
        <Close />
      </Path>
    </svg>
  );
}

export const genVideoIcon = (config: IconProps) => () => <VideoIcon {...config} />;
