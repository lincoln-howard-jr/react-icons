import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Chevron pointing down (hollowed out)
export function ChevronDownIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
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
        </svg>
    )
}

export const genChevronDownIcon = (config: IconProps) => () => <ChevronDownIcon {...config} />;
