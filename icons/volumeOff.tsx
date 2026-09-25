import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Muted speaker. */
export function VolumeOffIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={38} />
        <LineTo x={28} y={38} />
        <LineTo x={50} y={18} />
        <LineTo x={50} y={82} />
        <LineTo x={28} y={62} />
        <LineTo x={10} y={62} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={65} y={37} />
        <LineTo x={89} y={63} />
      </Path>
      <Path {...props}>
        <Start x={89} y={37} />
        <LineTo x={65} y={63} />
      </Path>
    </svg>
  );
}

export const genVolumeOffIcon = (config: IconProps) => () => <VolumeOffIcon {...config} />;
