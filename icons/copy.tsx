import { Close, LineTo, Path, Start, ArcTo } from "../components/Path";
import { IconProps, dimensions } from "./IconProps";

export function CopyIcon(props: IconProps) {
	return (
		<svg className={props.className} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
			<Path {...props}>
				<Start x={30} y={18} />
				<LineTo x={68} y={18} />
				<ArcTo x={78} y={28} rx={10} />
				<LineTo x={78} y={66} />
				<ArcTo x={68} y={76} rx={10} />
				<LineTo x={30} y={76} />
				<ArcTo x={20} y={66} rx={10} />
				<LineTo x={20} y={28} />
				<ArcTo x={30} y={18} rx={10} />
				<Close />
			</Path>
			<Path {...props}>
				<Start x={42} y={30} />
				<LineTo x={80} y={30} />
				<ArcTo x={90} y={40} rx={10} />
				<LineTo x={90} y={78} />
				<ArcTo x={80} y={88} rx={10} />
				<LineTo x={42} y={88} />
				<ArcTo x={32} y={78} rx={10} />
				<LineTo x={32} y={40} />
				<ArcTo x={42} y={30} rx={10} />
				<Close />
			</Path>
		</svg>
	)
}

export const genCopyIcon = (config: IconProps) => () => <CopyIcon {...config} />;