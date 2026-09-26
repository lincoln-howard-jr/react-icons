import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Floppy disk save action. */
export function SaveIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={12} y={12} />
        <LineTo x={72} y={12} />
        <LineTo x={88} y={28} />
        <LineTo x={88} y={88} />
        <LineTo x={12} y={88} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={28} y={12} />
        <LineTo x={64} y={12} />
        <LineTo x={64} y={37} />
        <LineTo x={28} y={37} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={28} y={58} />
        <LineTo x={72} y={58} />
        <LineTo x={72} y={88} />
        <LineTo x={28} y={88} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={55} y={18} />
        <LineTo x={55} y={30} />
      </Path>
    </svg>
  );
}

export const genSaveIcon = (config: IconProps) => () => <SaveIcon {...config} />;
