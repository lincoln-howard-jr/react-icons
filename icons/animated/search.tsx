import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Search icon - pulsing/breathing effect
export function AnimatedSearchIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1.5;
    const animationId = `search-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-pulse {
                        0% { transform: scale(0.8); opacity: 0; }
                        50% { transform: scale(1.1); opacity: 1; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    .${animationId}-lens {
                        transform-origin: 55% 35%;
                        ${onHover ? '' : `animation: ${animationId}-pulse ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-lens {
                        animation: ${animationId}-pulse ${duration}s ease-out forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-lens`}>
                {/* Circle lens */}
                <Path {...props}>
                    <Start x={25} y={35} />
                    <ArcTo x={55} y={5} rx={30} />
                    <ArcTo x={85} y={35} rx={30} />
                    <ArcTo x={55} y={65} rx={30} />
                    <ArcTo x={25} y={35} rx={30} />
                    <Close />
                </Path>
            </g>
            {/* Handle */}
            <Path {...props}>
                <Start x={30} y={62} />
                <LineTo x={10} y={90} />
            </Path>
        </svg>
    )
}

export const genAnimatedSearchIcon = (config: IconProps) => () => <AnimatedSearchIcon {...config} />;
