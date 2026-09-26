import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Interlocking chain links. */
export function LinkIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={42} y={64} />
        <LineTo x={29} y={77} />
        <ArcTo x={9} y={57} rx={14} />
        <LineTo x={35} y={31} />
        <ArcTo x={55} y={31} rx={14} />
      </Path>
      <Path {...props}>
        <Start x={58} y={36} />
        <LineTo x={71} y={23} />
        <ArcTo x={91} y={43} rx={14} />
        <LineTo x={65} y={69} />
        <ArcTo x={45} y={69} rx={14} />
      </Path>
      <Path {...props}>
        <Start x={35} y={65} />
        <LineTo x={65} y={35} />
      </Path>
    </svg>
  );
}

export const genLinkIcon = (config: IconProps) => () => <LinkIcon {...config} />;
