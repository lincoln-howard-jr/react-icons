import { Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Chevron Down icon - bounce down
export function AnimatedChevronDownIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `chevron-down-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0% { transform: translateY(-20%); opacity: 0; }
                        60% { transform: translateY(5%); opacity: 1; }
                        100% { transform: translateY(0); opacity: 1; }
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
                    <Start x={10} y={30} />
                    <LineTo x={20} y={30} />
                    <LineTo x={50} y={60} />
                    <LineTo x={80} y={30} />
                    <LineTo x={90} y={30} />
                    <LineTo x={90} y={40} />
                    <LineTo x={50} y={80} />
                    <LineTo x={10} y={40} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedChevronDownIcon = (config: IconProps) => () => <AnimatedChevronDownIcon {...config} />;
