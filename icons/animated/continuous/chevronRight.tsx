import { Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Chevron Right icon - bounce right
export function ContinuousChevronRightIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `chevron-right-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0%, 100% { transform: translateX(0); }
                        50% { transform: translateX(10%); }
                    }
                    .${animationId}-chevron {
                        animation: ${animationId}-bounce ${duration}s ease-in-out infinite;
                    }
                `}
            </style>
            <g className={`${animationId}-chevron`}>
                <Path {...props}>
                    <Start x={30} y={10} />
                    <LineTo x={40} y={10} />
                    <LineTo x={80} y={50} />
                    <LineTo x={40} y={90} />
                    <LineTo x={30} y={90} />
                    <LineTo x={30} y={80} />
                    <LineTo x={60} y={50} />
                    <LineTo x={30} y={20} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genContinuousChevronRightIcon = (config: IconProps) => () => <ContinuousChevronRightIcon {...config} />;
