import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Light bulb icon with rays
export function LightBulbIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Bulb body */}
            <Path {...props}>
                <Start x={35} y={55} />
                <ArcTo x={50} y={15} rx={22} />
                <ArcTo x={65} y={55} rx={22} />
                <LineTo x={65} y={62} />
                <LineTo x={35} y={62} />
                <Close />
            </Path>
            {/* Base lines */}
            <Path {...props}>
                <Start x={40} y={69} />
                <LineTo x={60} y={69} />
            </Path>
            <Path {...props}>
                <Start x={40} y={77} />
                <LineTo x={60} y={77} />
            </Path>
            {/* Top ray */}
            <Path {...props}>
                <Start x={50} y={5} />
                <LineTo x={50} y={12} />
            </Path>
            {/* Right ray */}
            <Path {...props}>
                <Start x={90} y={40} />
                <LineTo x={83} y={40} />
            </Path>
            {/* Left ray */}
            <Path {...props}>
                <Start x={10} y={40} />
                <LineTo x={17} y={40} />
            </Path>
            {/* Top right ray */}
            <Path {...props}>
                <Start x={78} y={12} />
                <LineTo x={72} y={18} />
            </Path>
            {/* Top left ray */}
            <Path {...props}>
                <Start x={22} y={12} />
                <LineTo x={28} y={18} />
            </Path>
        </svg>
    )
}

export const genLightBulbIcon = (config: IconProps) => () => <LightBulbIcon {...config} />;
