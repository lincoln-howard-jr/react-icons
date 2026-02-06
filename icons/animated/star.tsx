import { Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Star icon - twinkle/sparkle effect
export function AnimatedStarIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1;
    const animationId = `star-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-twinkle {
                        0% { transform: scale(0) rotate(-180deg); opacity: 0; }
                        60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
                        100% { transform: scale(1) rotate(0deg); opacity: 1; }
                    }
                    .${animationId}-star {
                        transform-origin: 50% 50%;
                        ${onHover ? '' : `animation: ${animationId}-twinkle ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-star {
                        animation: ${animationId}-twinkle ${duration}s ease-out forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-star`}>
                <Path {...props}>
                    <Start x={50} y={5} />
                    <LineTo x={61} y={35} />
                    <LineTo x={95} y={35} />
                    <LineTo x={68} y={55} />
                    <LineTo x={78} y={90} />
                    <LineTo x={50} y={70} />
                    <LineTo x={22} y={90} />
                    <LineTo x={32} y={55} />
                    <LineTo x={5} y={35} />
                    <LineTo x={39} y={35} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedStarIcon = (config: IconProps) => () => <AnimatedStarIcon {...config} />;
