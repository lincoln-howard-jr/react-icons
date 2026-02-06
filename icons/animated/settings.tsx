import { ArcTo, Close, LineTo, Path, Start } from "../../components/Path";
import { IconProps, dimensions, rotate } from "../IconProps";

const innerCircleStart = rotate(50, 65, 0);
const innerCircleTop = rotate(50, 35, 0);
const innerCircleRadius = 15;

const outerCircleRadius = 0;

const gears = new Array(8).fill(Math.PI).map((pi, i) => ({
    start: rotate(20, 50, (i * pi / 4) - (pi / 8)),
    line1: rotate(10, 50, (i * pi / 4) - (pi / 8) + (pi / 40)),
    line2: rotate(10, 50, (i * pi / 4) - (pi / 40)),
    line3: rotate(20, 50, (i * pi / 4)),
    end: rotate(20, 50, ((i + 1) * pi / 4) - (pi / 8))
}));

// Animated Settings icon - gear rotates
export function AnimatedSettingsIcon(props: IconProps) {
    const duration = props.animationDuration ?? 3;
    const animationId = `settings-${Math.random().toString(36).substr(2, 9)}`;
    const onHover = props.animateOnHover ?? false;

    return (
        <svg className={`${props.className ?? ''} ${onHover ? `${animationId}-svg` : ''}`} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .${animationId}-gear {
                        transform-origin: 50% 50%;
                        ${onHover ? '' : `animation: ${animationId}-rotate ${duration}s linear forwards;`}
                    }
                    ${onHover ? `
                    .${animationId}-svg:hover .${animationId}-gear {
                        animation: ${animationId}-rotate ${duration}s linear forwards;
                    }
                    ` : ''}
                `}
            </style>
            <g className={`${animationId}-gear`}>
                <Path {...props}>
                    <Start {...innerCircleStart} />
                    <ArcTo {...innerCircleTop} rx={innerCircleRadius} />
                    <ArcTo {...innerCircleStart} rx={innerCircleRadius} />
                    <Start {...gears[0].start} />
                    {
                        gears.map((gear, i) => (
                            <g key={i}>
                                <LineTo {...gear.line1} />
                                <LineTo {...gear.line2} />
                                <LineTo {...gear.line3} />
                                <ArcTo {...gear.end} rx={outerCircleRadius} />
                            </g>
                        ))
                    }
                    <Close />
                </Path>
            </g>
        </svg>
    )
}

export const genAnimatedSettingsIcon = (config: IconProps) => () => <AnimatedSettingsIcon {...config} />;
