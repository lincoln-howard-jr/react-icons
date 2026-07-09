import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Shrug icon inspired by the shrug emoji silhouette.
export function ShrugIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
    >
      {/* Head */}
      <Path {...props}>
        <Start x={38} y={24} />
        <ArcTo x={62} y={24} rx={12} />
        <ArcTo x={38} y={24} rx={12} />
        <Close />
      </Path>

      {/* Torso */}
      <Path {...props}>
        <Start x={38} y={44} />
        <ArcTo x={62} y={44} rx={14} ry={10} />
        <LineTo x={66} y={80} />
        <LineTo x={34} y={80} />
        <Close />
      </Path>

      {/* Left arm and hand */}
      <Path {...props}>
        <Start x={38} y={50} />
        <LineTo x={33} y={46} />
        <LineTo x={24} y={38} />
        <LineTo x={16} y={44} />
        <ArcTo x={10} y={42} rx={5} />
        <ArcTo x={16} y={36} rx={5} />
        <LineTo x={25} y={34} />
        <LineTo x={35} y={42} />
      </Path>

      {/* Right arm and hand */}
      <Path {...props}>
        <Start x={62} y={50} />
        <LineTo x={67} y={46} />
        <LineTo x={76} y={38} />
        <LineTo x={84} y={44} />
        <ArcTo x={90} y={42} rx={5} sweep={false} />
        <ArcTo x={84} y={36} rx={5} sweep={false} />
        <LineTo x={75} y={34} />
        <LineTo x={65} y={42} />
      </Path>
    </svg>
  );
}

export const genShrugIcon = (config: IconProps) => () => (
  <ShrugIcon {...config} />
);
