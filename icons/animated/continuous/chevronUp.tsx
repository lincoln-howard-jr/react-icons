import { Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Chevron Up icon - bounce up
export function ContinuousChevronUpIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `chevron-up-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10%); }
                    }
                    .${animationId}-chevron {
                        animation: ${animationId}-bounce ${duration}s ease-in-out infinite;
                    }
                `}
            </style>
            <g className={`${animationId}-chevron`}>
                <Path {...props}>
                    <Start x={10} y={70} />
                    <LineTo x={10} y={60} />
                    <LineTo x={50} y={20} />
                    <LineTo x={90} y={60} />
                    <LineTo x={90} y={70} />
                    <LineTo x={80} y={70} />
                    <LineTo x={50} y={40} />
                    <LineTo x={20} y={70} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genContinuousChevronUpIcon = (config: IconProps) => () => <ContinuousChevronUpIcon {...config} />;
