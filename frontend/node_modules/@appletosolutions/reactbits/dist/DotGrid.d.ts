import React from "react";
export interface DotGridProps {
    dotSize?: number;
    gap?: number;
    baseColor?: string;
    activeColor?: string;
    proximity?: number;
    speedTrigger?: number;
    shockRadius?: number;
    shockStrength?: number;
    maxSpeed?: number;
    resistance?: number;
    returnDuration?: number;
    className?: string;
    style?: React.CSSProperties;
}
declare const DotGrid: React.FC<DotGridProps>;
export default DotGrid;
//# sourceMappingURL=DotGrid.d.ts.map