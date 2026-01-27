import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Paper plane/submit icon
export function SubmitIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            <Path {...props}>
                <Start x={5} y={50} />
                <LineTo x={20} y={5} />
                <LineTo x={95} y={50} />
                <LineTo x={20} y={95} />
                <LineTo x={5} y={50} />
            </Path>
            <Path {...props}>
                <Start x={5} y={50} />
                <LineTo x={95} y={50} />
            </Path>
        </svg>
    )
}

export const genSubmitIcon = (config: IconProps) => () => <SubmitIcon {...config} />;
