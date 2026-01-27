import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Minus/remove icon with rounded ends
export function RemoveIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={10} y={45} />
                <ArcTo x={10} y={55} rx={5} />
                <LineTo x={90} y={55} />
                <ArcTo x={90} y={45} rx={5} />
                <Close />
            </Path>
        </svg>
    )
}

export const genRemoveIcon = (config: IconProps) => () => <RemoveIcon {...config} />;
