import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions } from "../IconProps";

// Animated Plus icon - rotate in
export function AnimatedPlusIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.5;
    const animationId = `plus-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(180deg); }
                    }
                    .${animationId}-plus {
                        transform-origin: 50% 50%;
                        ${onHover ? '' : `animation: ${animationId}-spin ${duration}s ease-out forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-plus {
                        animation: ${animationId}-spin ${duration}s ease-out forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-plus`}>
                <Path {...props}>
                    <Start x={10} y={45} />
                    <ArcTo x={10} y={55} rx={5} />
                    <LineTo x={45} y={55} />
                    <LineTo x={45} y={90} />
                    <ArcTo x={55} y={90} rx={5} />
                    <LineTo x={55} y={55} />
                    <LineTo x={90} y={55} />
                    <ArcTo x={90} y={45} rx={5} />
                    <LineTo x={55} y={45} />
                    <LineTo x={55} y={10} />
                    <ArcTo x={45} y={10} rx={5} />
                    <LineTo x={45} y={45} />
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedPlusIcon = (config: IconProps) => () => <AnimatedPlusIcon {...config} />;
