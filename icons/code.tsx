import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Code brackets with slash. */
export function CodeIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={30} y={25} />
        <LineTo x={8} y={50} />
        <LineTo x={30} y={75} />
      </Path>
      <Path {...props}>
        <Start x={70} y={25} />
        <LineTo x={92} y={50} />
        <LineTo x={70} y={75} />
      </Path>
      <Path {...props}>
        <Start x={60} y={12} />
        <LineTo x={40} y={88} />
      </Path>
    </svg>
  );
}

export const genCodeIcon = (config: IconProps) => () => <CodeIcon {...config} />;
