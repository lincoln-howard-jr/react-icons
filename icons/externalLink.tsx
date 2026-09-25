import { LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Open in another window. */
export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={50} y={18} />
        <LineTo x={18} y={18} />
        <LineTo x={18} y={82} />
        <LineTo x={82} y={82} />
        <LineTo x={82} y={50} />
      </Path>
      <Path {...props}>
        <Start x={55} y={10} />
        <LineTo x={90} y={10} />
        <LineTo x={90} y={45} />
      </Path>
      <Path {...props}>
        <Start x={90} y={10} />
        <LineTo x={45} y={55} />
      </Path>
    </svg>
  );
}

export const genExternalLinkIcon = (config: IconProps) => () => <ExternalLinkIcon {...config} />;
