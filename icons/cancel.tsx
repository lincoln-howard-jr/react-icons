import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

export const CancelIcon = (props: IconProps) => (
    <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
        <Path color={props.color} className={props.className} >
            <Start x={0} y={0} />
            <LineTo x={100} y={100} />
        </Path>
        <Path color={props.color} className={props.className} >
            <Start x={0} y={100} />
            <LineTo x={100} y={0} />
        </Path>
    </svg>
)
export const genCancelIcon = (config: IconProps) => () => <CancelIcon {...config} />