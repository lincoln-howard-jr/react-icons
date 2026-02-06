import { Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Chevron Left icon - bounce left
export function AnimatedChevronLeftIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `chevron-left-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0% { transform: translateX(20%); opacity: 0; }
                        60% { transform: translateX(-5%); opacity: 1; }
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

export const genAnimatedChevronLeftIcon = (config: IconProps) => () => <AnimatedChevronLeftIcon {...config} />;
