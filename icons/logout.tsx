import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Arrow leaving a doorway. */
export function LogoutIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={45} y={12} />
        <LineTo x={10} y={12} />
        <LineTo x={10} y={88} />
        <LineTo x={45} y={88} />
      </Path>
      <Path {...props}>
        <Start x={40} y={50} />
        <LineTo x={90} y={50} />
      </Path>
      <Path {...props}>
        <Start x={70} y={30} />
        <LineTo x={90} y={50} />
        <LineTo x={70} y={70} />
      </Path>
    </svg>
  );
}

export const genLogoutIcon = (config: IconProps) => () => <LogoutIcon {...config} />;
