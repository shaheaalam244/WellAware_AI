import React from "react";
export interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string | ((t: number) => number);
    splitType?: "chars" | "words" | "lines" | "words, chars";
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: React.CSSProperties["textAlign"];
    onLetterAnimationComplete?: () => void;
}
declare const SplitText: React.FC<SplitTextProps>;
export default SplitText;
//# sourceMappingURL=SplitText.d.ts.map