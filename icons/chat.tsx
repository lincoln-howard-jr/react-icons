import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions, rotate } from "./IconProps";

const start1 = rotate (35, 92, 0);
const line1 = rotate (45, 75, 0);
const arc1 = rotate (50, 15, 0);
const arc2 = rotate (60, 75, 0);

export function ChatBubbles (props: IconProps) {
    return (
        <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
                <Path {...props}>
                    <Start {...start1} />
                    <LineTo {...line1} />
                    <ArcTo {...arc1} rx={40} ry={30} />
                    <ArcTo {...arc2} rx={40} ry={30} />
                    <Close />
                </Path>
        </svg>
    )
}

export const genChatBubblesIcon = (config: IconProps) => () => <ChatBubbles {...config} />