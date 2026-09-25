import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Warning triangle with exclamation mark. */
export function WarningIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={10} />
        <LineTo x={94} y={88} />
        <LineTo x={6} y={88} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={50} y={36} />
        <LineTo x={50} y={61} />
      </Path>
      <Path {...props}>
        <Start x={48} y={74} />
        <ArcTo x={52} y={74} rx={2} />
        <ArcTo x={48} y={74} rx={2} />
        <Close />
      </Path>
    </svg>
  );
}

export const genWarningIcon = (config: IconProps) => () => <WarningIcon {...config} />;
