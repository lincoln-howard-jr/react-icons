import { ArcTo, Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions } from "../../IconProps";

// Continuously animated Plus icon - rotating
export function ContinuousPlusIcon(props: IconProps) {
    const duration = props.animationDuration ?? 2;
    const animationId = `plus-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .${animationId}-plus {
                        transform-origin: 50% 50%;
                        animation: ${animationId}-spin ${duration}s linear infinite;
                    }
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

export const genContinuousPlusIcon = (config: IconProps) => () => <ContinuousPlusIcon {...config} />;
