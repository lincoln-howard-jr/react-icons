import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Chevron pointing up (hollowed out)
export function ChevronUpIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={10} y={70} />
                <LineTo x={10} y={60} />
                <LineTo x={50} y={20} />
                <LineTo x={90} y={60} />
                <LineTo x={90} y={70} />
                <LineTo x={80} y={70} />
                <LineTo x={50} y={40} />
                <LineTo x={20} y={70} />
                <Close />
            </Path>
        </svg>
    )
}

export const genChevronUpIcon = (config: IconProps) => () => <ChevronUpIcon {...config} />;
