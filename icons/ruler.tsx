import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Horizontal ruler icon with measurement marks
export function RulerIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Main ruler body */}
            <Path {...props}>
                <Start x={5} y={35} />
                <LineTo x={95} y={35} />
                <ArcTo x={95} y={40} rx={3} />
                <LineTo x={95} y={60} />
                <ArcTo x={95} y={65} rx={3} />
                <LineTo x={5} y={65} />
                <ArcTo x={5} y={60} rx={3} />
                <LineTo x={5} y={40} />
                <ArcTo x={5} y={35} rx={3} />
                <Close />
            </Path>
            
            {/* Major tick marks (long) */}
            <Path {...props}>
                <Start x={15} y={35} />
                <LineTo x={15} y={50} />
            </Path>
            <Path {...props}>
                <Start x={30} y={35} />
                <LineTo x={30} y={50} />
            </Path>
            <Path {...props}>
                <Start x={50} y={35} />
                <LineTo x={50} y={50} />
            </Path>
            <Path {...props}>
                <Start x={70} y={35} />
                <LineTo x={70} y={50} />
            </Path>
            <Path {...props}>
                <Start x={85} y={35} />
                <LineTo x={85} y={50} />
            </Path>
            
            {/* Minor tick marks (short) */}
            <Path {...props}>
                <Start x={22.5} y={35} />
                <LineTo x={22.5} y={43} />
            </Path>
            <Path {...props}>
                <Start x={40} y={35} />
                <LineTo x={40} y={43} />
            </Path>
            <Path {...props}>
                <Start x={60} y={35} />
                <LineTo x={60} y={43} />
            </Path>
            <Path {...props}>
                <Start x={77.5} y={35} />
                <LineTo x={77.5} y={43} />
            </Path>
        </svg>
    )
}

export const genRulerIcon = (config: IconProps) => () => <RulerIcon {...config} />;
