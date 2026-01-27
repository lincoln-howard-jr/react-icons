import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Chevron pointing left (hollowed out)
export function ChevronLeftIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={70} y={10} />
                <LineTo x={70} y={20} />
                <LineTo x={40} y={50} />
                <LineTo x={70} y={80} />
                <LineTo x={70} y={90} />
                <LineTo x={60} y={90} />
                <LineTo x={20} y={50} />
                <LineTo x={60} y={10} />
                <Close />
            </Path>
        </svg>
    )
}

export const genChevronLeftIcon = (config: IconProps) => () => <ChevronLeftIcon {...config} />;
