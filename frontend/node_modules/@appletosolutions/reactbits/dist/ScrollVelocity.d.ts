import React from "react";
interface VelocityMapping {
    input: [number, number];
    output: [number, number];
}
interface ScrollVelocityProps {
    scrollContainerRef?: React.RefObject<HTMLElement>;
    texts: string[];
    velocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}
export declare const ScrollVelocity: React.FC<ScrollVelocityProps>;
export default ScrollVelocity;
//# sourceMappingURL=ScrollVelocity.d.ts.map