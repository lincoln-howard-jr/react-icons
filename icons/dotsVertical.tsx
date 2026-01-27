import { ArcTo, Close, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Three vertical dots
export function DotsVerticalIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Top dot */}
            <Path {...props}>
                <Start x={42} y={20} />
                <ArcTo x={58} y={20} rx={8} ry={8} />
                <ArcTo x={42} y={20} rx={8} ry={8} />
                <Close />
            </Path>
            {/* Center dot */}
            <Path {...props}>
                <Start x={42} y={50} />
                <ArcTo x={58} y={50} rx={8} ry={8} />
                <ArcTo x={42} y={50} rx={8} ry={8} />
                <Close />
            </Path>
            {/* Bottom dot */}
            <Path {...props}>
                <Start x={42} y={80} />
                <ArcTo x={58} y={80} rx={8} ry={8} />
                <ArcTo x={42} y={80} rx={8} ry={8} />
                <Close />
            </Path>
        </svg>
    )
}

export const genDotsVerticalIcon = (config: IconProps) => () => <DotsVerticalIcon {...config} />;
