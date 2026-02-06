import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Light bulb icon - glowing rays
export function AnimatedLightBulbIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1.5;
    const animationId = `lightbulb-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-glow {
                        0% { opacity: 0; transform: scale(0.5); }
                        50% { opacity: 1; transform: scale(1.2); }
                        100% { opacity: 1; transform: scale(1); }
                    }
                    .${animationId}-rays {
                        transform-origin: 50% 40%;
                        ${onHover ? '' : `animation: ${animationId}-glow ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-rays {
                        animation: ${animationId}-glow ${duration}s ease-out forwards;
                    }
                    ` : ''}
                `}
            </style>
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
            {/* Animated rays */}
            <g className={`${animationId}-rays`}>
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
                {/* Top-right ray */}
                <Path {...props}>
                    <Start x={78} y={18} />
                    <LineTo x={72} y={24} />
                </Path>
                {/* Top-left ray */}
                <Path {...props}>
                    <Start x={22} y={18} />
                    <LineTo x={28} y={24} />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedLightBulbIcon = (config: IconProps) => () => <AnimatedLightBulbIcon {...config} />;
