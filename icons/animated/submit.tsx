import { LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Submit/paper plane icon - flies in from left
export function AnimatedSubmitIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `submit-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-fly {
                        0% { transform: translateX(-30%) translateY(20%); opacity: 0; }
                        60% { transform: translateX(5%) translateY(-5%); opacity: 1; }
                        100% { transform: translateX(0) translateY(0); opacity: 1; }
                    }
                    .${animationId}-plane {
                        ${onHover ? '' : `animation: ${animationId}-fly ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-plane {
                        animation: ${animationId}-fly ${duration}s ease-out forwards;
                    }
                    ` : ''}
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

export const genAnimatedSubmitIcon = (config: IconProps) => () => <AnimatedSubmitIcon {...config} />;
