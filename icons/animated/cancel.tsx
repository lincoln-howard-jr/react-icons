import { Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Cancel icon - rotate on appear
export function AnimatedCancelIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.3;
    const animationId = `cancel-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-spin {
                        from { transform: rotate(0deg) scale(0); opacity: 0; }
                        to { transform: rotate(180deg) scale(1); opacity: 1; }
                    }
                    .${animationId}-x {
                        transform-origin: 50% 50%;
                        ${onHover ? '' : `animation: ${animationId}-spin ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-x {
                        animation: ${animationId}-spin ${duration}s ease-out forwards;
                    }
                    ` : ''}
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

export const genAnimatedCancelIcon = (config: IconProps) => () => <AnimatedCancelIcon {...config} />;
