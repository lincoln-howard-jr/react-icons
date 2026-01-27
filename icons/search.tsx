import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Magnifying glass/search icon
export function SearchIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Circle lens */}
            <Path {...props}>
                <Start x={25} y={35} />
                <ArcTo x={55} y={5} rx={30} />
                <ArcTo x={85} y={35} rx={30} />
                <ArcTo x={55} y={65} rx={30} />
                <ArcTo x={25} y={35} rx={30} />
                <Close />
            </Path>
            {/* Handle */}
            <Path {...props}>
                <Start x={30} y={62} />
                <LineTo x={10} y={90} />
            </Path>
        </svg>
    )
}

export const genSearchIcon = (config: IconProps) => () => <SearchIcon {...config} />;
