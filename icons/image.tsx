import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Landscape image frame. */
export function ImageIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={15} />
        <LineTo x={90} y={15} />
        <LineTo x={90} y={85} />
        <LineTo x={10} y={85} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={60} y={34} />
        <ArcTo x={76} y={34} rx={8} />
        <ArcTo x={60} y={34} rx={8} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={10} y={72} />
        <LineTo x={35} y={44} />
        <LineTo x={58} y={68} />
        <LineTo x={71} y={55} />
        <LineTo x={90} y={76} />
      </Path>
    </svg>
  );
}

export const genImageIcon = (config: IconProps) => () => <ImageIcon {...config} />;
