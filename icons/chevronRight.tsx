import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Chevron pointing right (hollowed out)
export function ChevronRightIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={30} y={10} />
                <LineTo x={40} y={10} />
                <LineTo x={80} y={50} />
                <LineTo x={40} y={90} />
                <LineTo x={30} y={90} />
                <LineTo x={30} y={80} />
                <LineTo x={60} y={50} />
                <LineTo x={30} y={20} />
                <Close />
            </Path>
        </svg>
    )
}

export const genChevronRightIcon = (config: IconProps) => () => <ChevronRightIcon {...config} />;
