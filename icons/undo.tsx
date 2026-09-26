import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Undo with a curved left arrow. */
export function UndoIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={15} y={40} />
        <LineTo x={60} y={40} />
        <ArcTo x={60} y={85} rx={23} />
      </Path>
      <Path {...props}>
        <Start x={35} y={20} />
        <LineTo x={15} y={40} />
        <LineTo x={35} y={60} />
      </Path>
    </svg>
  );
}

export const genUndoIcon = (config: IconProps) => () => <UndoIcon {...config} />;
