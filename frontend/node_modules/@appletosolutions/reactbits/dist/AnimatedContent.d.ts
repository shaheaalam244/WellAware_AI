import React, { ReactNode } from "react";
interface AnimatedContentProps {
    children: ReactNode;
    distance?: number;
    direction?: "vertical" | "horizontal";
    reverse?: boolean;
    duration?: number;
    ease?: string | ((progress: number) => number);
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
    onComplete?: () => void;
}
declare const AnimatedContent: React.FC<AnimatedContentProps>;
export default AnimatedContent;
//# sourceMappingURL=AnimatedContent.d.ts.map