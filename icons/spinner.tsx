import { ArcTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Spinner icon - a circle with a gap to indicate loading
export function SpinnerIcon(props: IconProps) {
    return (
        <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Three-quarter arc forming the spinner */}
            <Path {...props}>
                <Start x={50} y={10} />
                <ArcTo x={90} y={50} rx={40} />
                <ArcTo x={50} y={90} rx={40} />
                <ArcTo x={10} y={50} rx={40} />
            </Path>
        </svg>
    )
}

export const genSpinnerIcon = (config: IconProps) => () => <SpinnerIcon {...config} />;
