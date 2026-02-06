import { Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Star icon - twinkle/sparkle effect
export function ContinuousStarIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1;
    const animationId = `star-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-twinkle {
                        0%, 100% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(0.9); opacity: 0.7; }
                    }
                    .${animationId}-star {
                        transform-origin: 50% 50%;
                        animation: ${animationId}-twinkle ${duration}s ease-in-out infinite;
                    }
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

export const genContinuousStarIcon = (config: IconProps) => () => <ContinuousStarIcon {...config} />;
