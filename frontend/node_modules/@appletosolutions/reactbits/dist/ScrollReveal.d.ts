import React, { ReactNode, RefObject } from "react";
interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}
declare const ScrollReveal: React.FC<ScrollRevealProps>;
export default ScrollReveal;
//# sourceMappingURL=ScrollReveal.d.ts.map