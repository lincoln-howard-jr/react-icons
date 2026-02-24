import { JSX } from "react";
import { IconProps, scale, rscale, weights } from "../icons/IconProps";

/**
 * @param props.x x coordinate of the starting point as a percentage of the width of the icon
 * @param props.y y coordinate of the starting point as a percentage of the height of the icon
 * @returns null
 */
export const Start = function (props: { x: number, y: number, pathString?: string }) {
    return `${props.pathString} M ${scale(props.x)} ${scale(props.y)}`;
}

/**
 * @param props.x x coordinate of the end point of a line as a percentage of the width of the icon
 * @param props.y y coordinate of the end point of a line as a percentage of the height of the icon
 * @returns null
 */
export const LineTo = function (props: { x: number, y: number, pathString?: string }) {
    return `${props.pathString} L ${scale(props.x)} ${scale(props.y)}`;
}

export const ArcTo = function (props: { x: number, y: number, rx: number, ry?: number, xAxisRotation?: number, sweep?: boolean, large?: boolean, pathString?: string }) {
    return `${props.pathString} A ${rscale(props.rx)} ${rscale(props.ry ?? props.rx)} ${props.xAxisRotation ?? 0} ${props.large ? 1 : 0}  ${props.sweep === undefined ? 1 : (props.sweep ? 1 : 0)} ${scale(props.x)} ${scale(props.y)}`;
}

export const Close = function (props: { pathString?: string }) {
    return `${props.pathString} Z`;
}

export function Path(props: { children: JSX.Element[] } & IconProps) {
    const pathstring = props.children.reduce((pathString, child) => {
        if(typeof child.type !== 'function') {
            console.error('Child of Path must be a function component');
            return pathString;
        }
        return child.type({ ...child.props, pathString });
    }, '');
    return (
        <path className={props.className} strokeWidth={weights[props.weight || 'normal']} stroke={props.color || 'black'} fill={props.fill ? props.fillColor ? props.fillColor : 'black' : 'none'} d={pathstring} />
    )
}