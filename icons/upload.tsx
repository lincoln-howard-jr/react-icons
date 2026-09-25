import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Upload arrow above a tray. */
export function UploadIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={65} />
        <LineTo x={50} y={12} />
      </Path>
      <Path {...props}>
        <Start x={30} y={32} />
        <LineTo x={50} y={12} />
        <LineTo x={70} y={32} />
      </Path>
      <Path {...props}>
        <Start x={15} y={65} />
        <LineTo x={15} y={88} />
        <LineTo x={85} y={88} />
        <LineTo x={85} y={65} />
      </Path>
    </svg>
  );
}

export const genUploadIcon = (config: IconProps) => () => <UploadIcon {...config} />;
