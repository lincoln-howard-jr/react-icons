import { ArcTo, Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Search icon - pulsing/breathing effect
export function ContinuousSearchIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1.5;
    const animationId = `search-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-pulse {
                        0%, 100% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.05); opacity: 0.8; }
                    }
                    .${animationId}-lens {
                        transform-origin: 55% 35%;
                        animation: ${animationId}-pulse ${duration}s ease-in-out infinite;
                    }
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

export const genContinuousSearchIcon = (config: IconProps) => () => <ContinuousSearchIcon {...config} />;
