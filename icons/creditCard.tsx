import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Payment card with magnetic stripe. */
export function CreditCardIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={8} y={22} />
        <LineTo x={92} y={22} />
        <LineTo x={92} y={78} />
        <LineTo x={8} y={78} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={8} y={38} />
        <LineTo x={92} y={38} />
      </Path>
      <Path {...props}>
        <Start x={22} y={62} />
        <LineTo x={42} y={62} />
      </Path>
      <Path {...props}>
        <Start x={53} y={62} />
        <LineTo x={65} y={62} />
      </Path>
    </svg>
  );
}

export const genCreditCardIcon = (config: IconProps) => () => <CreditCardIcon {...config} />;
