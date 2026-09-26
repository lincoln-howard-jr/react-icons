import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Envelope for email. */
export function MailIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={22} />
        <LineTo x={90} y={22} />
        <LineTo x={90} y={78} />
        <LineTo x={10} y={78} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={10} y={22} />
        <LineTo x={50} y={54} />
        <LineTo x={90} y={22} />
      </Path>
    </svg>
  );
}

export const genMailIcon = (config: IconProps) => () => <MailIcon {...config} />;
