import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Three connected sharing nodes. */
export function ShareIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={28} y={45} />
        <LineTo x={71} y={23} />
      </Path>
      <Path {...props}>
        <Start x={28} y={55} />
        <LineTo x={71} y={77} />
      </Path>
      <Path {...props}>
        <Start x={10} y={50} />
        <ArcTo x={30} y={50} rx={10} />
        <ArcTo x={10} y={50} rx={10} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={70} y={18} />
        <ArcTo x={90} y={18} rx={10} />
        <ArcTo x={70} y={18} rx={10} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={70} y={82} />
        <ArcTo x={90} y={82} rx={10} />
        <ArcTo x={70} y={82} rx={10} />
        <Close />
      </Path>
    </svg>
  );
}

export const genShareIcon = (config: IconProps) => () => <ShareIcon {...config} />;
