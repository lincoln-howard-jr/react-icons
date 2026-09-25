import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Redo with a curved right arrow. */
export function RedoIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={85} y={40} />
        <LineTo x={40} y={40} />
        <ArcTo x={40} y={85} rx={23} sweep={false} />
      </Path>
      <Path {...props}>
        <Start x={65} y={20} />
        <LineTo x={85} y={40} />
        <LineTo x={65} y={60} />
      </Path>
    </svg>
  );
}

export const genRedoIcon = (config: IconProps) => () => <RedoIcon {...config} />;
