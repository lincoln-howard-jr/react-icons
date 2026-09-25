import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Heart for likes or favorites. */
export function HeartIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={88} />
        <LineTo x={15} y={53} />
        <ArcTo x={50} y={25} rx={23} />
        <ArcTo x={85} y={53} rx={23} />
        <Close />
      </Path>
    </svg>
  );
}

export const genHeartIcon = (config: IconProps) => () => <HeartIcon {...config} />;
