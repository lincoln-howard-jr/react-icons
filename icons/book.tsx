import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// should be a book icon with the book open
// the book should be at an angle
export function BookIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={5} y={20} />
                <LineTo x={20} y={20} />
                <LineTo x={20} y={12.5} />
                <LineTo x={35} y={12.5} />
                <LineTo x={35} y={5} />
                <ArcTo x={50} y={20} rx={15} ry={15} />
                <ArcTo x={80} y={12.5} rx={40} ry={40} />
                <LineTo x={80} y={20} />
                <LineTo x={95} y={20} />
                <LineTo x={95} y={90} />
                <LineTo x={60} y={90} />
                <ArcTo x={50} y={94} rx={15} ry={15} />
                <ArcTo x={40} y={90} rx={15} ry={15} />
                <LineTo x={5} y={90} />
                <Close />
            </Path>
            <Path {...props}>
                <Start x={80} y={20} />
                <LineTo x={80} y={80} />
                <LineTo x={55} y={80} />
                <ArcTo x={45} y={80} rx={7.5} ry={7.5} />
                <LineTo x={20} y={80} />
                <LineTo x={20} y={20} />
            </Path>
            <Path {...props}>
                <Start x={50} y={20} />
                <LineTo x={50} y={80} />
            </Path>
            <Path {...props}>
                <Start x={35} y={12.5} />
                <LineTo x={35} y={65} />
                <ArcTo x={50} y={80} rx={15} ry={15} />
            </Path>
        </svg>
    )
}
export const genBookIcon = (config: IconProps) => () => <BookIcon {...config} />