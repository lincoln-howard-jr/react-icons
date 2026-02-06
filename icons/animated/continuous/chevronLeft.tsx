import { Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Chevron Left icon - bounce left
export function ContinuousChevronLeftIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `chevron-left-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0%, 100% { transform: translateX(0); }
                        50% { transform: translateX(-10%); }
                    }
                    .${animationId}-chevron {
                        animation: ${animationId}-bounce ${duration}s ease-in-out infinite;
                    }
                `}
            </style>
            <g className={`${animationId}-chevron`}>
                <Path {...props}>
                    <Start x={70} y={10} />
                    <LineTo x={70} y={20} />
                    <LineTo x={40} y={50} />
                    <LineTo x={70} y={80} />
                    <LineTo x={70} y={90} />
                    <LineTo x={60} y={90} />
                    <LineTo x={20} y={50} />
                    <LineTo x={60} y={10} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genContinuousChevronLeftIcon = (config: IconProps) => () => <ContinuousChevronLeftIcon {...config} />;
