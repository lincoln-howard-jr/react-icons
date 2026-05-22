import { ArcTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Spinner icon - rotates infinitely
export function ContinuousSpinnerIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1;
    const animationId = `spinner-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .${animationId}-spin {
                        transform-origin: 50% 50%;
                        animation: ${animationId}-rotate ${duration}s linear infinite;
                    }
                `}
            </style>
            <g className={`${animationId}-spin`}>
                {/* Three-quarter arc forming the spinner */}
                <Path {...props}>
                    <Start x={50} y={10} />
                    <ArcTo x={90} y={50} rx={40} />
                    <ArcTo x={50} y={90} rx={40} />
                    <ArcTo x={10} y={50} rx={40} />
                </Path>
            </g>
        </svg>
    )
}

export const genContinuousSpinnerIcon = (config: IconProps) => () => <ContinuousSpinnerIcon {...config} />;
