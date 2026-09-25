import { ArcTo, Close, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Cloud storage or service. */
export function CloudIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={25} y={80} />
        <ArcTo x={22} y={40} rx={20} />
        <ArcTo x={76} y={36} rx={28} />
        <ArcTo x={80} y={80} rx={22} />
        <Close />
      </Path>
    </svg>
  );
}

export const genCloudIcon = (config: IconProps) => () => <CloudIcon {...config} />;
