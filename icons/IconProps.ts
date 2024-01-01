export const weights = {
    thin: 12,
    normal: 16,
    thick: 20
}
export const dimensions = {
    width: 512,
    height: 512,
    padding: 28
}
export function scale (percentage: number) {
    return dimensions.padding + percentage * (dimensions.width - 2 * dimensions.padding) / 100;
}
export function rscale (percentage: number) {
    return percentage * (dimensions.width - 2 * dimensions.padding) / 100
}
export type Coords = {
    x: number;
    y: number;
}
/**
 * rotate x [0, 100] and y [0, 100] by angle around center (x: 50, y: 50)
 * 
 * @param x The x coordinate in [0, 100]
 * @param y The y coordinate in [0, 100]
 * @param angle The angle in radians (default: - PI / 4)
 * @returns The rotated coordinates
 */
export const rotate = (x: number, y: number, angle: number=-Math.PI / 4):Coords => {
    const cx = 50;
    const cy = 50;
    const dx = x - cx;
    const dy = y - cy;
    const r = Math.sqrt (dx * dx + dy * dy);
    const theta = Math.atan2 (dy, dx) + angle;
    return {
        x: cx + r * Math.cos (theta),
        y: cy + r * Math.sin (theta)
    }
}
export type IconProps = {
    className?: string;
    color?: string;
    weight?: keyof typeof weights;
}