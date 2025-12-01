interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
}
export default function CountUp({ to, from, direction, delay, duration, className, startWhen, separator, onStart, onEnd, }: CountUpProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CountUp.d.ts.map