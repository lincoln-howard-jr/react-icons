import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

// Question mark icon
export function QuestionMarkIcon(props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
            {/* Question mark - outer curve */}
            <Path {...props}>
                <Start x={25} y={30} />
                <ArcTo x={50} y={5} rx={25} />
                <ArcTo x={75} y={30} rx={25} />
                 <ArcTo x={55} y={55} rx={25} />
                <LineTo x={55} y={70} />
                <LineTo x={45} y={70} />
                <LineTo x={45} y={45} />
                <LineTo x={50} y={45}/>
                <ArcTo x={65} y={30} rx={15} ry={-15} />
                <ArcTo x={35} y={30} rx={15} ry={-15} />
                <Close />
            </Path>
            {/* Dot at bottom - perfect circle using two semicircular arcs */}
            <Path {...props}>
                <Start x={44} y={89} />
                <ArcTo x={56} y={89} rx={6} />
                <ArcTo x={44} y={89} rx={6} />
            </Path>
        </svg>
    )
}

export const genQuestionMarkIcon = (config: IconProps) => () => <QuestionMarkIcon {...config} />;
