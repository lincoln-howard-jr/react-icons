import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Bell/notifications icon
export function NotificationsIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Bell body */}
            <Path {...props}>
                <Start x={20} y={60} />
                <LineTo x={20} y={40} />
                <ArcTo x={50} y={15} rx={30} />
                <ArcTo x={80} y={40} rx={30} />
                <LineTo x={80} y={60} />
                <ArcTo x={90} y={75} rx={15} />
                <LineTo x={10} y={75} />
                <ArcTo x={20} y={60} rx={15} />
                <Close />
            </Path>
            {/* Clapper/ringer bottom */}
            <Path {...props}>
                <Start x={38} y={75} />
                <ArcTo x={50} y={90} rx={12} />
                <ArcTo x={62} y={75} rx={12} />
            </Path>
            {/* Top knob */}
            <Path {...props}>
                <Start x={45} y={10} />
                <ArcTo x={55} y={10} rx={5} />
                <ArcTo x={55} y={5} rx={5} />
                <ArcTo x={45} y={5} rx={5} />
                <ArcTo x={45} y={10} rx={5} />
                <Close />
            </Path>
        </svg>
    )
}

export const genNotificationsIcon = (config: IconProps) => () => <NotificationsIcon {...config} />;
