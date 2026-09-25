import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Bookmark ribbon. */
export function BookmarkIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={25} y={10} />
        <LineTo x={75} y={10} />
        <LineTo x={75} y={90} />
        <LineTo x={50} y={70} />
        <LineTo x={25} y={90} />
        <Close />
      </Path>
    </svg>
  );
}

export const genBookmarkIcon = (config: IconProps) => () => <BookmarkIcon {...config} />;
