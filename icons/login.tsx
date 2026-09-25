import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Arrow entering a doorway. */
export function LoginIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={12} />
        <LineTo x={85} y={12} />
        <LineTo x={85} y={88} />
        <LineTo x={50} y={88} />
      </Path>
      <Path {...props}>
        <Start x={10} y={50} />
        <LineTo x={64} y={50} />
      </Path>
      <Path {...props}>
        <Start x={44} y={30} />
        <LineTo x={64} y={50} />
        <LineTo x={44} y={70} />
      </Path>
    </svg>
  );
}

export const genLoginIcon = (config: IconProps) => () => <LoginIcon {...config} />;
