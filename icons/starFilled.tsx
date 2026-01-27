import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Filled star icon (5-pointed)
export function StarFilledIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={50} y={5} />
                <LineTo x={61} y={35} />
                <LineTo x={95} y={35} />
                <LineTo x={68} y={55} />
                <LineTo x={78} y={90} />
                <LineTo x={50} y={70} />
                <LineTo x={22} y={90} />
                <LineTo x={32} y={55} />
                <LineTo x={5} y={35} />
                <LineTo x={39} y={35} />
                <Close />
            </Path>
        </svg>
    )
}

export const genStarFilledIcon = (config: IconProps) => () => <StarFilledIcon {...config} />;
