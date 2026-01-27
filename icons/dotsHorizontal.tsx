import { ArcTo, Close, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Three horizontal dots (ellipsis)
export function DotsHorizontalIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Left dot */}
            <Path {...props}>
                <Start x={12} y={50} />
                <ArcTo x={28} y={50} rx={8} ry={8} />
                <ArcTo x={12} y={50} rx={8} ry={8} />
                <Close />
            </Path>
            {/* Center dot */}
            <Path {...props}>
                <Start x={42} y={50} />
                <ArcTo x={58} y={50} rx={8} ry={8} />
                <ArcTo x={42} y={50} rx={8} ry={8} />
                <Close />
            </Path>
            {/* Right dot */}
            <Path {...props}>
                <Start x={72} y={50} />
                <ArcTo x={88} y={50} rx={8} ry={8} />
                <ArcTo x={72} y={50} rx={8} ry={8} />
                <Close />
            </Path>
        </svg>
    )
}

export const genDotsHorizontalIcon = (config: IconProps) => () => <DotsHorizontalIcon {...config} />;
