import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Price or category tag. */
export function TagIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={10} y={12} />
        <LineTo x={48} y={12} />
        <LineTo x={90} y={54} />
        <LineTo x={54} y={90} />
        <LineTo x={10} y={46} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={22} y={30} />
        <ArcTo x={34} y={30} rx={6} />
        <ArcTo x={22} y={30} rx={6} />
        <Close />
      </Path>
    </svg>
  );
}

export const genTagIcon = (config: IconProps) => () => <TagIcon {...config} />;
