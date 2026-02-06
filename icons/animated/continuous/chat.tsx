import { ArcTo, Close, LineTo, Path, Start } from "../../../components/Path";
import { IconProps, dimensions, rotate } from "../../IconProps";

const start1 = rotate(35, 92, 0);
const line1 = rotate(45, 75, 0);
const arc1 = rotate(50, 15, 0);
const arc2 = rotate(60, 75, 0);

// Continuously animated Chat icon - bounce effect
export function ContinuousChatIcon(props: IconProps) {
    const duration = props.animationDuration ?? 0.6;
    const animationId = `chat-cont-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <style>
                {`
                    @keyframes ${animationId}-bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5%); }
                    }
                    .${animationId}-bubble {
                        animation: ${animationId}-bounce ${duration}s ease-in-out infinite;
                    }
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

export const genContinuousChatIcon = (config: IconProps) => () => <ContinuousChatIcon {...config} />;
