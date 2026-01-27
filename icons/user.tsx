import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// should be a circle for the head and a oval for the body
export function UserIcon (props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={30} y={30} />
                <ArcTo x={70} y={30} rx={20} />
                <ArcTo x={50} y={50} rx={20} />
                <ArcTo x={85} y={90} rx={40} />
                <LineTo x={15} y={90} />
                <ArcTo x={50} y={50} rx={40} />
                <ArcTo x={30} y={30} rx={20} />
                <Close />
            </Path>
        </svg>
    )
}

export const genUserIcon = (config: IconProps) => () => <UserIcon {...config} />;