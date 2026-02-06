import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Stopwatch icon - clock hand rotates
export function AnimatedStopwatchIcon(props: IconProps) {
    const duration = props.animationDuration ?? 2;
    const animationId = `stopwatch-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;
    
    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .${animationId}-hand {
                        transform-origin: 50% 55%;
                        ${onHover ? '' : `animation: ${animationId}-rotate ${duration}s linear forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-hand {
                        animation: ${animationId}-rotate ${duration}s linear forwards;
                    }
                    ` : ''}
                `}
            </style>
            {/* Main circle */}
            <Path {...props}>
                <Start x={10} y={55} />
                <ArcTo x={50} y={15} rx={40} />
                <ArcTo x={90} y={55} rx={40} />
                <ArcTo x={50} y={95} rx={40} />
                <ArcTo x={10} y={55} rx={40} />
                <Close />
            </Path>
            {/* Top button stem */}
            <Path {...props}>
                <Start x={45} y={5} />
                <LineTo x={55} y={5} />
            </Path>
            <Path {...props}>
                <Start x={45} y={5} />
                <LineTo x={45} y={12} />
            </Path>
            <Path {...props}>
                <Start x={55} y={5} />
                <LineTo x={55} y={12} />
            </Path>
            {/* Right button */}
            <Path {...props}>
                <Start x={78} y={22} />
                <LineTo x={85} y={15} />
            </Path>
            {/* Inner circle */}
            <Path {...props}>
                <Start x={20} y={55} />
                <ArcTo x={50} y={25} rx={30} />
                <ArcTo x={80} y={55} rx={30} />
                <ArcTo x={50} y={85} rx={30} />
                <ArcTo x={20} y={55} rx={30} />
                <Close />
            </Path>
            {/* Clock hand - animated */}
            <g className={`${animationId}-hand`}>
                <Path {...props}>
                    <Start x={50} y={55} />
                    <LineTo x={65} y={40} />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedStopwatchIcon = (config: IconProps) => () => <AnimatedStopwatchIcon {...config} />;
