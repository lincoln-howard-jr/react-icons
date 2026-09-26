import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Error status in a circle, distinct from dismiss. */
export function ErrorIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={50} />
        <ArcTo x={90} y={50} rx={40} />
        <ArcTo x={10} y={50} rx={40} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={35} y={35} />
        <LineTo x={65} y={65} />
      </Path>
      <Path {...props}>
        <Start x={65} y={35} />
        <LineTo x={35} y={65} />
      </Path>
    </svg>
  );
}

export const genErrorIcon = (config: IconProps) => () => <ErrorIcon {...config} />;
