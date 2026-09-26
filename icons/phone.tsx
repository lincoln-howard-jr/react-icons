import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Telephone handset. */
export function PhoneIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={18} y={10} />
        <LineTo x={35} y={10} />
        <LineTo x={43} y={30} />
        <LineTo x={31} y={42} />
        <ArcTo x={58} y={69} rx={65} sweep={false} />
        <LineTo x={70} y={57} />
        <LineTo x={90} y={65} />
        <LineTo x={90} y={82} />
        <ArcTo x={75} y={92} rx={15} />
        <ArcTo x={8} y={25} rx={80} />
        <ArcTo x={18} y={10} rx={15} />
        <Close />
      </Path>
    </svg>
  );
}

export const genPhoneIcon = (config: IconProps) => () => <PhoneIcon {...config} />;
