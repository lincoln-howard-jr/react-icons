import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Dashboard/grid icon with rounded rectangles
export function DashIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Top left rectangle (tall) */}
            <Path {...props}>
                <Start x={10} y={15} />
                <ArcTo x={15} y={10} rx={5} />
                <LineTo x={40} y={10} />
                <ArcTo x={45} y={15} rx={5} />
                <LineTo x={45} y={55} />
                <ArcTo x={40} y={60} rx={5} />
                <LineTo x={15} y={60} />
                <ArcTo x={10} y={55} rx={5} />
                <Close />
            </Path>
            {/* Top right rectangle (short) */}
            <Path {...props}>
                <Start x={55} y={15} />
                <ArcTo x={60} y={10} rx={5} />
                <LineTo x={85} y={10} />
                <ArcTo x={90} y={15} rx={5} />
                <LineTo x={90} y={35} />
                <ArcTo x={85} y={40} rx={5} />
                <LineTo x={60} y={40} />
                <ArcTo x={55} y={35} rx={5} />
                <Close />
            </Path>
            {/* Bottom left rectangle (short) */}
            <Path {...props}>
                <Start x={10} y={75} />
                <ArcTo x={15} y={70} rx={5} />
                <LineTo x={40} y={70} />
                <ArcTo x={45} y={75} rx={5} />
                <LineTo x={45} y={85} />
                <ArcTo x={40} y={90} rx={5} />
                <LineTo x={15} y={90} />
                <ArcTo x={10} y={85} rx={5} />
                <Close />
            </Path>
            {/* Bottom right rectangle (tall) */}
            <Path {...props}>
                <Start x={55} y={55} />
                <ArcTo x={60} y={50} rx={5} />
                <LineTo x={85} y={50} />
                <ArcTo x={90} y={55} rx={5} />
                <LineTo x={90} y={85} />
                <ArcTo x={85} y={90} rx={5} />
                <LineTo x={60} y={90} />
                <ArcTo x={55} y={85} rx={5} />
                <Close />
            </Path>
        </svg>
    )
}

export const genDashIcon = (config: IconProps) => () => <DashIcon {...config} />;
