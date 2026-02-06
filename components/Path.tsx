import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { IconProps, scale, rscale, weights } from "../icons/IconProps";

type PathCtx = {
    start: (x: number, y: number) => void;
    addLineTo: (x: number, y: number) => void;
    addArcTo: (x: number, y: number, rx: number, ry?: number, xAxisRotation?: number, sweep?: boolean, large?: boolean) => void;
    close: () => void;
}

const PathContext = createContext<PathCtx>({
    start: () => { },
    addLineTo: () => { },
    addArcTo: () => { },
    close: () => { }
});

export function Path(props: { children: ReactNode | ReactNode[] } & IconProps) {
    const [pathString, setPathString] = useState<string>('');
    const start = (x: number, y: number) => {
        setPathString(pathString => `${pathString} M ${scale(x)} ${scale(y)}`);
    }
    const addLineTo = (x: number, y: number) => {
        setPathString(pathString => `${pathString} L ${scale(x)} ${scale(y)}`);
    }
    const addArcTo = (x: number, y: number, rx: number, ry?: number, xAxisRotation?: number, sweep?: boolean, large?: boolean) => {
        const sweepFlag = sweep === undefined ? 1 : (sweep ? 1 : 0);
        setPathString(pathString => `${pathString} A ${rscale(rx)} ${rscale(ry ?? rx)} ${xAxisRotation ?? 0} ${large ? 1 : 0}  ${sweepFlag ? 1 : 0} ${scale(x)} ${scale(y)}`);
    }
    const close = () => {
        setPathString(pathString => `${pathString} Z`);
    }
    const ctx: PathCtx = {
        start,
        addLineTo,
        addArcTo,
        close
    }
    return (
        <PathContext.Provider value={ctx}>
            {props.children}
            <path className={props.className} strokeWidth={weights[props.weight || 'normal']} stroke={props.color || 'black'} fill={props.fill ? props.fillColor ? props.fillColor : 'black' : 'none'} d={pathString} />
        </PathContext.Provider>
    )
}

/**
 * @param props.x x coordinate of the starting point as a percentage of the width of the icon
 * @param props.y y coordinate of the starting point as a percentage of the height of the icon
 * @returns null
 */
export const Start = function (props: { x: number, y: number }) {
    const ctx = useContext(PathContext);
    useMemo (() => {
        ctx.start(props.x, props.y);
    }, [props.x, props.y]);
    return null;
}

/**
 * @param props.x x coordinate of the end point of a line as a percentage of the width of the icon
 * @param props.y y coordinate of the end point of a line as a percentage of the height of the icon
 * @returns null
 */
export const LineTo = function (props: { x: number, y: number }) {
    const ctx = useContext(PathContext);
    useMemo (() => {
        ctx.addLineTo(props.x, props.y);
    }, [props.x, props.y]);
    return null;
}

export const ArcTo = function (props: { x: number, y: number, rx: number, ry?: number, xAxisRotation?: number, sweep?: boolean, large?: boolean }) {
    const ctx = useContext(PathContext);
    useMemo(() => {
        ctx.addArcTo(props.x, props.y, props.rx, props.ry, props.xAxisRotation, props.sweep, props.large);
    }, [props.x, props.y, props.rx, props.ry, props.xAxisRotation, props.sweep, props.large]);
    return null;
}

export const Close = function () {
    const ctx = useContext(PathContext);
    useMemo(() => {
        ctx.close();
    }, []);
    return null;
}