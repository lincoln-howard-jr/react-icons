import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Information status in a circle. */
export function InfoIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={50} />
        <ArcTo x={90} y={50} rx={40} />
        <ArcTo x={10} y={50} rx={40} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={48} y={30} />
        <ArcTo x={52} y={30} rx={2} />
        <ArcTo x={48} y={30} rx={2} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={43} y={44} />
        <LineTo x={50} y={44} />
        <LineTo x={50} y={72} />
      </Path>
      <Path {...props}>
        <Start x={40} y={72} />
        <LineTo x={60} y={72} />
      </Path>
    </svg>
  );
}

export const genInfoIcon = (config: IconProps) => () => <InfoIcon {...config} />;
