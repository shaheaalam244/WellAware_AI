type BlurTextProps = {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, string | number>;
    animationTo?: Array<Record<string, string | number>>;
    easing?: (t: number) => number;
    onAnimationComplete?: () => void;
    stepDuration?: number;
};
declare const BlurText: React.FC<BlurTextProps>;
export default BlurText;
//# sourceMappingURL=BlurText.d.ts.map