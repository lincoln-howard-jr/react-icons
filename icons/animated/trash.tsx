import { ArcTo, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Trash icon - shake before delete
export function AnimatedTrashIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `trash-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-shake {
                        0% { transform: rotate(0deg); }
                        20% { transform: rotate(-10deg); }
                        40% { transform: rotate(10deg); }
                        60% { transform: rotate(-5deg); }
                        80% { transform: rotate(5deg); }
                        100% { transform: rotate(0deg); }
                    }
                    .${animationId}-trash {
                        transform-origin: 50% 25%;
                        ${onHover ? '' : `animation: ${animationId}-shake ${duration}s ease-in-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-trash {
                        animation: ${animationId}-shake ${duration}s ease-in-out forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-trash`}>
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
            </g>
        </svg>
    )
}

export const genAnimatedTrashIcon = (config: IconProps) => () => <AnimatedTrashIcon {...config} />;
