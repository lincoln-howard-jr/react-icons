import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// should be a hollow x shape
export const CancelIcon = (props: IconProps) => (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
        <Path {...props} >
            <Start x={12} y={3} />
            <LineTo x={50} y={43} />
            <LineTo x={88} y={3} />
            <LineTo x={97} y={12} />
            <LineTo x={57} y={50} />
            <LineTo x={95} y={90} />
            <LineTo x={88} y={97} />
            <LineTo x={50} y={57} />
            <LineTo x={12} y={95} />
            <LineTo x={3} y={88} />
            <LineTo x={43} y={50} />
            <LineTo x={3} y={12} />
            <Close />
        </Path>
    </svg>
)
export const genCancelIcon = (config: IconProps) => () => <CancelIcon {...config} />