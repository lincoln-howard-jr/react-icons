import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions, rotate } from "./IconProps";

const start1 = rotate (0, 50);
const line1 = rotate (15, 40);
const line2 = rotate (90, 40);
const line3 = rotate (90, 60);
const line4 = rotate (15, 60);
const line5 = rotate (0, 50);
const start2 = rotate (20, 40);
const line6 = rotate (20, 60);
const start3 = rotate (90, 40);
const arc1 = rotate (90, 60);
const arcR = dimensions.width / 500;

export function PenIcon (props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start {...start1} />
                <LineTo {...line1} />
                <LineTo {...line2} />
                <LineTo {...line3} />
                <LineTo {...line4} />
                <LineTo {...line5} />
                <Close />
            </Path>
            <Path {...props}>
                <Start {...start2} />
                <LineTo {...line6} />
            </Path>
            <Path {...props}>
                <Start {...start3} />
                <ArcTo {...arc1} rx={arcR} />
            </Path>
        </svg>
    )
}

export const genPenIcon = (config: IconProps) => () => <PenIcon {...config} />