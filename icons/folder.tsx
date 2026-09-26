import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** File folder. */
export function FolderIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={22} />
        <LineTo x={40} y={22} />
        <LineTo x={50} y={34} />
        <LineTo x={90} y={34} />
        <LineTo x={90} y={84} />
        <LineTo x={10} y={84} />
        <Close />
      </Path>
    </svg>
  );
}

export const genFolderIcon = (config: IconProps) => () => <FolderIcon {...config} />;
