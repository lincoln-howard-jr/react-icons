import { LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Submit/paper plane icon - floating/hovering effect
export function ContinuousSubmitIcon(props: IconProps) {
    const duration = props.animationDuration ?? 1;
    const animationId = `submit-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-hover {
                        0%, 100% { transform: translateX(0) translateY(0); }
                        50% { transform: translateX(3%) translateY(-3%); }
                    }
                    .${animationId}-plane {
                        animation: ${animationId}-hover ${duration}s ease-in-out infinite;
                    }
                `}
            </style>
            <g className={`${animationId}-plane`}>
                <Path {...props}>
                    <Start x={5} y={50} />
                    <LineTo x={20} y={5} />
                    <LineTo x={95} y={50} />
                    <LineTo x={20} y={95} />
                    <LineTo x={5} y={50} />
                </Path>
                <Path {...props}>
                    <Start x={5} y={50} />
                    <LineTo x={95} y={50} />
                </Path>
            </g>
        </svg>
    )
}

export const genContinuousSubmitIcon = (config: IconProps) => () => <ContinuousSubmitIcon {...config} />;
