import { ArcTo, Close, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Wireless signal. */
export function WifiIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={8} y={32} />
        <ArcTo x={92} y={32} rx={64} />
      </Path>
      <Path {...props}>
        <Start x={23} y={49} />
        <ArcTo x={77} y={49} rx={41} />
      </Path>
      <Path {...props}>
        <Start x={37} y={65} />
        <ArcTo x={63} y={65} rx={21} />
      </Path>
      <Path {...props}>
        <Start x={47} y={82} />
        <ArcTo x={53} y={82} rx={3} />
        <ArcTo x={47} y={82} rx={3} />
        <Close />
      </Path>
    </svg>
  );
}

export const genWifiIcon = (config: IconProps) => () => <WifiIcon {...config} />;
