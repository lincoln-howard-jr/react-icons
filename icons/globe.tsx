import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Global or language selection. */
export function GlobeIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={50} />
        <ArcTo x={90} y={50} rx={40} />
        <ArcTo x={10} y={50} rx={40} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={50} y={10} />
        <ArcTo x={50} y={90} rx={17} ry={40} />
        <ArcTo x={50} y={10} rx={17} ry={40} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={10} y={50} />
        <LineTo x={90} y={50} />
      </Path>
      <Path {...props}>
        <Start x={17} y={28} />
        <LineTo x={83} y={28} />
      </Path>
      <Path {...props}>
        <Start x={17} y={72} />
        <LineTo x={83} y={72} />
      </Path>
    </svg>
  );
}

export const genGlobeIcon = (config: IconProps) => () => <GlobeIcon {...config} />;
