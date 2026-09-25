import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Access key with two teeth. */
export function KeyIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={30} />
        <ArcTo x={50} y={30} rx={20} />
        <ArcTo x={10} y={30} rx={20} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={44} y={44} />
        <LineTo x={86} y={86} />
        <LineTo x={94} y={78} />
        <LineTo x={82} y={66} />
        <LineTo x={74} y={74} />
      </Path>
      <Path {...props}>
        <Start x={21} y={25} />
        <ArcTo x={29} y={25} rx={4} />
        <ArcTo x={21} y={25} rx={4} />
        <Close />
      </Path>
    </svg>
  );
}

export const genKeyIcon = (config: IconProps) => () => <KeyIcon {...config} />;
