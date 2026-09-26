import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Open padlock. */
export function UnlockIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={20} y={44} />
        <LineTo x={80} y={44} />
        <LineTo x={80} y={88} />
        <LineTo x={20} y={88} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={32} y={44} />
        <LineTo x={32} y={28} />
        <ArcTo x={68} y={28} rx={18} />
      </Path>
      <Path {...props}>
        <Start x={46} y={61} />
        <ArcTo x={54} y={61} rx={4} />
        <ArcTo x={46} y={61} rx={4} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={50} y={65} />
        <LineTo x={50} y={75} />
      </Path>
    </svg>
  );
}

export const genUnlockIcon = (config: IconProps) => () => <UnlockIcon {...config} />;
