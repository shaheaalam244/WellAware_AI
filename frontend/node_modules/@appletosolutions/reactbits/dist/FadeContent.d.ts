import React, { ReactNode } from "react";
interface FadeContentProps {
    children: ReactNode;
    blur?: boolean;
    duration?: number;
    easing?: string;
    delay?: number;
    threshold?: number;
    initialOpacity?: number;
    className?: string;
}
declare const FadeContent: React.FC<FadeContentProps>;
export default FadeContent;
//# sourceMappingURL=FadeContent.d.ts.map