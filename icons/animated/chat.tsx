import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions, rotate } from "../IconProps";

const start1 = rotate(35, 92, 0);
const line1 = rotate(45, 75, 0);
const arc1 = rotate(50, 15, 0);
const arc2 = rotate(60, 75, 0);

// Animated Chat icon - bounce effect
export function AnimatedChatIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.6;
    const animationId = `chat-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0% { transform: translateY(20%) scale(0.8); opacity: 0; }
                        60% { transform: translateY(-5%) scale(1.05); opacity: 1; }
                        100% { transform: translateY(0) scale(1); opacity: 1; }
                    }
                    .${animationId}-bubble {
                        ${onHover ? '' : `animation: ${animationId}-bounce ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-bubble {
                        animation: ${animationId}-bounce ${duration}s ease-out forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-bubble`}>
                <Path {...props}>
                    <Start {...start1} />
                    <LineTo {...line1} />
                    <ArcTo {...arc1} rx={40} ry={30} />
                    <ArcTo {...arc2} rx={40} ry={30} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedChatIcon = (config: IconProps) => () => <AnimatedChatIcon {...config} />;
