import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions, rotate } from "./IconProps";

const innerCircleStart = rotate (50, 65, 0);
const innerCircleTop = rotate (50, 35, 0);
const innerCircleRadius = 15;

const outerCircleRadius = 0;

const gears = new Array (8).fill (Math.PI).map ((pi, i) => ({
    start: rotate (20, 50, (i * pi / 4) - (pi / 8)),
    line1: rotate (10, 50, (i * pi / 4) - (pi / 8) + (pi / 40)),
    line2: rotate (10, 50, (i * pi / 4) - (pi / 40)),
    line3: rotate (20, 50, (i * pi / 4)),
    end: rotate (20, 50, ((i + 1) * pi / 4) - (pi / 8))
}))

export function SettingsIcon (props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
                <Path {...props}>
                    <Start {...innerCircleStart} />
                    <ArcTo {...innerCircleTop} rx={innerCircleRadius} />
                    <ArcTo {...innerCircleStart} rx={innerCircleRadius} />
                    <Start {...gears [0].start} />
                    <LineTo {...gears [0].line1} />
                    <LineTo {...gears [0].line2} />
                    <LineTo {...gears [0].line3} />
                    <LineTo {...gears [0].end} />
                    <Start {...gears [1].start} />
                    <LineTo {...gears [1].line1} />
                    <LineTo {...gears [1].line2} />
                    <LineTo {...gears [1].line3} />
                    <LineTo {...gears [1].end} />
                    <Start {...gears [2].start} />
                    <LineTo {...gears [2].line1} />
                    <LineTo {...gears [2].line2} />
                    <LineTo {...gears [2].line3} />
                    <LineTo {...gears [2].end} />
                    <Start {...gears [3].start} />
                    <LineTo {...gears [3].line1} />
                    <LineTo {...gears [3].line2} />
                    <LineTo {...gears [3].line3} />
                    <LineTo {...gears [3].end} />
                    <Start {...gears [4].start} />
                    <LineTo {...gears [4].line1} />
                    <LineTo {...gears [4].line2} />
                    <LineTo {...gears [4].line3} />
                    <LineTo {...gears [4].end} />
                    <Start {...gears [5].start} />
                    <LineTo {...gears [5].line1} />
                    <LineTo {...gears [5].line2} />
                    <LineTo {...gears [5].line3} />
                    <LineTo {...gears [5].end} />
                    <Start {...gears [6].start} />
                    <LineTo {...gears [6].line1} />
                    <LineTo {...gears [6].line2} />
                    <LineTo {...gears [6].line3} />
                    <LineTo {...gears [6].end} />
                    <Start {...gears [7].start} />
                    <LineTo {...gears [7].line1} />
                    <LineTo {...gears [7].line2} />
                    <LineTo {...gears [7].line3} />
                    <LineTo {...gears [7].end} />
                    <Close />
                </Path>
        </svg>
    )
}

export const genSettingsIcon = (config: IconProps) => () => <SettingsIcon {...config} />