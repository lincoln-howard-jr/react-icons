import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions, rotate } from "./IconProps";

const bodyStart = rotate (25, 100, 0);
const bodyLine1 = rotate (75, 100, 0);
const bodyR_x = 22.5;
const bodyR_y = 20
const bodyRightArc = rotate (50, 50, 0);
const bodyLeftArc = rotate (25, 100, 0);
const headStart = rotate (50, 45, 0);
const headR = 21.5;
const headArc = rotate (50, 2, 0);

export function UserIcon (props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start {...bodyStart} />
                <LineTo {...bodyLine1} />
                <ArcTo {...bodyRightArc} rx={bodyR_x} ry={bodyR_y} />
                <ArcTo {...bodyLeftArc} rx={bodyR_x} ry={bodyR_y} />
                <Start {...headStart} />
                <ArcTo {...headArc} rx={headR} />
                <ArcTo {...headStart} rx={headR} />
                <Close />
            </Path>
        </svg>
    )
}

export const genUserIcon = (config: IconProps) => () => <UserIcon {...config} />;