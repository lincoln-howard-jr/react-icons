import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Shopping cart with wheels. */
export function CartIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={5} y={12} />
        <LineTo x={18} y={12} />
        <LineTo x={32} y={70} />
        <LineTo x={80} y={70} />
      </Path>
      <Path {...props}>
        <Start x={23} y={30} />
        <LineTo x={92} y={30} />
        <LineTo x={82} y={56} />
        <LineTo x={29} y={56} />
      </Path>
      <Path {...props}>
        <Start x={31} y={84} />
        <ArcTo x={45} y={84} rx={7} />
        <ArcTo x={31} y={84} rx={7} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={68} y={84} />
        <ArcTo x={82} y={84} rx={7} />
        <ArcTo x={68} y={84} rx={7} />
        <Close />
      </Path>
    </svg>
  );
}

export const genCartIcon = (config: IconProps) => () => <CartIcon {...config} />;
