import { Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Cancel icon - pulse effect
export function ContinuousCancelIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1;
    const animationId = `cancel-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-pulse {
                        0%, 100% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(0.9); opacity: 0.7; }
                    }
                    .${animationId}-x {
                        transform-origin: 50% 50%;
                        animation: ${animationId}-pulse ${duration}s ease-in-out infinite;
                    }
                `}
            </style>
            <g className={`${animationId}-x`}>
                <Path {...props}>
                    <Start x={12} y={3} />
                    <LineTo x={50} y={43} />
                    <LineTo x={88} y={3} />
                    <LineTo x={97} y={12} />
                    <LineTo x={57} y={50} />
                    <LineTo x={95} y={90} />
                    <LineTo x={88} y={97} />
                    <LineTo x={50} y={57} />
                    <LineTo x={12} y={95} />
                    <LineTo x={3} y={88} />
                    <LineTo x={43} y={50} />
                    <LineTo x={3} y={12} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genContinuousCancelIcon = (config: IconProps) => () => <ContinuousCancelIcon {...config} />;
