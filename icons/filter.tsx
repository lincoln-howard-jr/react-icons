import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Funnel/filter icon
export function FilterIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={5} y={10} />
                <LineTo x={95} y={10} />
                <LineTo x={60} y={50} />
                <LineTo x={60} y={85} />
                <LineTo x={40} y={95} />
                <LineTo x={40} y={50} />
                <LineTo x={5} y={10} />
            </Path>
        </svg>
    )
}

export const genFilterIcon = (config: IconProps) => () => <FilterIcon {...config} />;
