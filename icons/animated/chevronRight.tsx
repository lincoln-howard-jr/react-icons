import { Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Chevron Right icon - bounce right
export function AnimatedChevronRightIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `chevron-right-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0% { transform: translateX(-20%); opacity: 0; }
                        60% { transform: translateX(5%); opacity: 1; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    .${animationId}-chevron {
                        ${onHover ? '' : `animation: ${animationId}-bounce ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-chevron {
                        animation: ${animationId}-bounce ${duration}s ease-out forwards;
                    }
                    ` : ''}
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

export const genAnimatedChevronRightIcon = (config: IconProps) => () => <AnimatedChevronRightIcon {...config} />;
