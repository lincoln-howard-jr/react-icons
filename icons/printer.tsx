import { Close, LineTo, Path, Start } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

/** Printer with a paper output tray. */
export function PrinterIcon(props: IconProps) {
  return (
    <svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      <Path {...props}>
        <Start x={25} y={35} />
        <LineTo x={25} y={10} />
        <LineTo x={75} y={10} />
        <LineTo x={75} y={35} />
      </Path>
      <Path {...props}>
        <Start x={25} y={75} />
        <LineTo x={10} y={75} />
        <LineTo x={10} y={35} />
        <LineTo x={90} y={35} />
        <LineTo x={90} y={75} />
        <LineTo x={75} y={75} />
      </Path>
      <Path {...props}>
        <Start x={25} y={60} />
        <LineTo x={75} y={60} />
        <LineTo x={75} y={90} />
        <LineTo x={25} y={90} />
        <Close />
      </Path>
      <Path {...props}>
        <Start x={70} y={46} />
        <LineTo x={80} y={46} />
      </Path>
      <Path {...props}>
        <Start x={36} y={72} />
        <LineTo x={64} y={72} />
      </Path>
    </svg>
  );
}

export const genPrinterIcon = (config: IconProps) => () => <PrinterIcon {...config} />;
