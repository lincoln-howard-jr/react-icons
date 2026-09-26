import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Archive box with lid and handle. */
export function ArchiveIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={15} />
        <LineTo x={90} y={15} />
        <LineTo x={90} y={33} />
        <LineTo x={10} y={33} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={16} y={33} />
        <LineTo x={84} y={33} />
        <LineTo x={84} y={88} />
        <LineTo x={16} y={88} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={38} y={48} />
        <LineTo x={62} y={48} />
        <LineTo x={62} y={57} />
        <LineTo x={38} y={57} />
        <Close />
      </Path>
    </svg>
  );
}

export const genArchiveIcon = (config: IconProps) => () => <ArchiveIcon {...config} />;
