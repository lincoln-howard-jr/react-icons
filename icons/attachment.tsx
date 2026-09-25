import { ArcTo, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Paperclip attachment. */
export function AttachmentIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={65} y={30} />
        <LineTo x={65} y={70} />
        <ArcTo x={35} y={70} rx={15} />
        <LineTo x={35} y={25} />
        <ArcTo x={79} y={25} rx={22} />
        <LineTo x={79} y={70} />
        <ArcTo x={21} y={70} rx={29} />
        <LineTo x={21} y={34} />
      </Path>
    </svg>
  );
}

export const genAttachmentIcon = (config: IconProps) => () => <AttachmentIcon {...config} />;
