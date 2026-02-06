import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Bell/notifications icon - bell swings side to side
export function AnimatedNotificationsIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `notifications-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-ring {
                        0% { transform: rotate(0deg); }
                        25% { transform: rotate(15deg); }
                        50% { transform: rotate(-15deg); }
                        75% { transform: rotate(10deg); }
                        100% { transform: rotate(0deg); }
                    }
                    .${animationId}-bell {
                        transform-origin: 50% 10%;
                        ${onHover ? '' : `animation: ${animationId}-ring ${duration}s ease-in-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-bell {
                        animation: ${animationId}-ring ${duration}s ease-in-out forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-bell`}>
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
            </g>
        </svg>
    )
}

export const genAnimatedNotificationsIcon = (config: IconProps) => () => <AnimatedNotificationsIcon {...config} />;
