import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Speaker with sound waves. */
export function VolumeIcon(props: IconProps) {
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
        <Start x={63} y={34} />
        <ArcTo x={63} y={66} rx={23} sweep={true} />
      </Path>
      <Path {...props}>
        <Start x={75} y={20} />
        <ArcTo x={75} y={80} rx={41} sweep={true} />
      </Path>
    </svg>
  );
}

export const genVolumeIcon = (config: IconProps) => () => <VolumeIcon {...config} />;
