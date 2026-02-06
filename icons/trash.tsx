import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Trash/delete icon
export function TrashIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Main body */}
            <Path {...props}>
                <Start x={20} y={25} />
                <LineTo x={20} y={85} />
                <ArcTo x={30} y={95} rx={10} />
                <LineTo x={70} y={95} />
                <ArcTo x={80} y={85} rx={10} />
                <LineTo x={80} y={25} />
            </Path>
            {/* Top lid */}
            <Path {...props}>
                <Start x={10} y={25} />
                <LineTo x={90} y={25} />
            </Path>
            {/* Handle */}
            <Path {...props}>
                <Start x={35} y={25} />
                <LineTo x={35} y={15} />
                <ArcTo x={45} y={10} rx={10} />
                <LineTo x={55} y={10} />
                <ArcTo x={65} y={15} rx={10} />
                <LineTo x={65} y={25} />
            </Path>
            {/* Left line */}
            <Path {...props}>
                <Start x={35} y={40} />
                <LineTo x={35} y={80} />
            </Path>
            {/* Center line */}
            <Path {...props}>
                <Start x={50} y={40} />
                <LineTo x={50} y={80} />
            </Path>
            {/* Right line */}
            <Path {...props}>
                <Start x={65} y={40} />
                <LineTo x={65} y={80} />
            </Path>
        </svg>
    )
}

export const genTrashIcon = (config: IconProps) => () => <TrashIcon {...config} />;
