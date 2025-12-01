import React, { ReactNode, RefObject } from "react";
interface ScrollFloatProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}
declare const ScrollFloat: React.FC<ScrollFloatProps>;
export default ScrollFloat;
//# sourceMappingURL=ScrollFloat.d.ts.map