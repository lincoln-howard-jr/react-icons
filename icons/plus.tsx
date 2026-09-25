import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Plus/add icon with rounded ends
export function PlusIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Horizontal bar */}
            <Path {...props}>
                <Start x={10} y={45} />
                <LineTo x={10} y={55} />
                <LineTo x={45} y={55} />
                <LineTo x={45} y={90} />
                <LineTo x={55} y={90} />
                <LineTo x={55} y={55} />
                <LineTo x={90} y={55} />
                <LineTo x={90} y={45} />
                <LineTo x={55} y={45} />
                <LineTo x={55} y={10} />
                <LineTo x={45} y={10} />
                <LineTo x={45} y={45} />
                <Close />
            </Path>
        </svg>
    )
}

export const genPlusIcon = (config: IconProps) => () => <PlusIcon {...config} />;
