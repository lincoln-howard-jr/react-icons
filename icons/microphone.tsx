import { ArcTo, Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Microphone on a stand. */
export function MicrophoneIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={36} y={23} />
        <ArcTo x={64} y={23} rx={14} />
        <LineTo x={64} y={52} />
        <ArcTo x={36} y={52} rx={14} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={24} y={45} />
        <LineTo x={24} y={52} />
        <ArcTo x={76} y={52} rx={26} sweep={false} />
        <LineTo x={76} y={45} />
      </Path>
      <Path {...props}>
        <Start x={50} y={78} />
        <LineTo x={50} y={92} />
      </Path>
      <Path {...props}>
        <Start x={35} y={92} />
        <LineTo x={65} y={92} />
      </Path>
    </svg>
  );
}

export const genMicrophoneIcon = (config: IconProps) => () => <MicrophoneIcon {...config} />;
