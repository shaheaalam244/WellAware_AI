import React from "react";
type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;
interface SquaresProps {
    direction?: "diagonal" | "up" | "right" | "down" | "left";
    speed?: number;
    borderColor?: CanvasStrokeStyle;
    squareSize?: number;
    hoverFillColor?: CanvasStrokeStyle;
}
declare const Squares: React.FC<SquaresProps>;
export default Squares;
//# sourceMappingURL=Squares.d.ts.map