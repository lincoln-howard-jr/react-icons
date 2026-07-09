import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

export function MenuIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      <Path {...props}>
        <Start x={20} y={30} />
        <LineTo x={80} y={30} />
      </Path>
      <Path {...props}>
        <Start x={20} y={50} />
        <LineTo x={80} y={50} />
      </Path>
      <Path {...props}>
        <Start x={20} y={70} />
        <LineTo x={80} y={70} />
      </Path>
    </svg>
  );
}

export const genMenuIcon = (config: IconProps) => () => (
  <MenuIcon {...config} />
);
