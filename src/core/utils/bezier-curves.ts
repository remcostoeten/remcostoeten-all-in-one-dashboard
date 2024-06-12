export type BezierCurve = [number, number, number, number]

export const BEZIER_CURVES = {
    EASE: [0.25, 0.1, 0.25, 1] as BezierCurve,
    EASE_IN: [0.42, 0, 1, 1] as BezierCurve,
    EASE_OUT: [0, 0, 0.58, 1] as BezierCurve,
    EASE_IN_OUT: [0.42, 0, 0.58, 1] as BezierCurve,
    LINEAR: [0, 0, 1, 1] as BezierCurve,
    DEFAULT: [0.33, 0.04, 0.67, 0.37] as BezierCurve,
    CUSTOM: [0.17, 0.67, 0.83, 0.67] as BezierCurve,
    BEZIERONE: [0.215, 0.61, 0.355, 1] as BezierCurve,
    BEZIERWTO: [0.215, 0.61, 0.355, 1] as BezierCurve
} as const
