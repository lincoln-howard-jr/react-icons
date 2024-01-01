import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

export const CancelIcon = (props: IconProps) => (
    <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
        {
            (!props.genre || props.genre === 'normal') &&
            <>
                <Path color={props.color} className={props.className} >
                    <Start x={0} y={0} />
                    <LineTo x={100} y={100} />
                </Path>
                <Path color={props.color} className={props.className} >
                    <Start x={0} y={100} />
                    <LineTo x={100} y={0} />
                </Path>
            </>
        }
        {
            props.genre === 'hollow' &&
            <>
                <path stroke={props.color || 'black'} fill="none" d="M 10 14 L 14 10 L 32 29 L 50 10 L 54 14 L 35 32 L 54 50 L 50 54 L 32 35 L 14 54 L 10 50 L 29 32 L 10 14" />
            </>
        }
        {
            props.genre === 'thick' &&
            <>
                <path stroke={props.color || 'black'} fill={props.color || 'black'} d="M 10 14 L 14 10 L 32 29 L 50 10 L 54 14 L 35 32 L 54 50 L 50 54 L 32 35 L 14 54 L 10 50 L 29 32 L 10 14" />
            </>
        }
    </svg>
)
export const genCancelIcon = (config: IconProps) => () => <CancelIcon {...config} />