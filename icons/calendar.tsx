import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Calendar icon with rounded corners and date markers
export function CalendarIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Main calendar body */}
            <Path {...props}>
                <Start x={5} y={15} />
                <ArcTo x={10} y={10} rx={5} />
                <LineTo x={90} y={10} />
                <ArcTo x={95} y={15} rx={5} />
                <LineTo x={95} y={90} />
                <ArcTo x={90} y={95} rx={5} />
                <LineTo x={10} y={95} />
                <ArcTo x={5} y={90} rx={5} />
                <Close />
            </Path>
            {/* Top header bar */}
            <Path {...props}>
                <Start x={5} y={25} />
                <LineTo x={95} y={25} />
            </Path>
            {/* Left date hook */}
            <Path {...props}>
                <Start x={25} y={5} />
                <LineTo x={25} y={18} />
            </Path>
            {/* Center date hook */}
            <Path {...props}>
                <Start x={50} y={5} />
                <LineTo x={50} y={18} />
            </Path>
            {/* Right date hook */}
            <Path {...props}>
                <Start x={75} y={5} />
                <LineTo x={75} y={18} />
            </Path>
            {/* Grid row 1 */}
            <Path {...props}>
                <Start x={20} y={40} />
                <LineTo x={30} y={40} />
            </Path>
            <Path {...props}>
                <Start x={45} y={40} />
                <LineTo x={55} y={40} />
            </Path>
            <Path {...props}>
                <Start x={70} y={40} />
                <LineTo x={80} y={40} />
            </Path>
            {/* Grid row 2 */}
            <Path {...props}>
                <Start x={20} y={55} />
                <LineTo x={30} y={55} />
            </Path>
            <Path {...props}>
                <Start x={45} y={55} />
                <LineTo x={55} y={55} />
            </Path>
            <Path {...props}>
                <Start x={70} y={55} />
                <LineTo x={80} y={55} />
            </Path>
            {/* Grid row 3 */}
            <Path {...props}>
                <Start x={20} y={70} />
                <LineTo x={30} y={70} />
            </Path>
            <Path {...props}>
                <Start x={45} y={70} />
                <LineTo x={55} y={70} />
            </Path>
            <Path {...props}>
                <Start x={70} y={70} />
                <LineTo x={80} y={70} />
            </Path>
        </svg>
    )
}

export const genCalendarIcon = (config: IconProps) => () => <CalendarIcon {...config} />;
