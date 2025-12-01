interface CounterProps {
    value: number;
    fontSize?: number;
    padding?: number;
    places?: number[];
    gap?: number;
    borderRadius?: number;
    horizontalPadding?: number;
    textColor?: string;
    fontWeight?: React.CSSProperties["fontWeight"];
    containerStyle?: React.CSSProperties;
    counterStyle?: React.CSSProperties;
    digitStyle?: React.CSSProperties;
    gradientHeight?: number;
    gradientFrom?: string;
    gradientTo?: string;
    topGradientStyle?: React.CSSProperties;
    bottomGradientStyle?: React.CSSProperties;
}
export default function Counter({ value, fontSize, padding, places, gap, borderRadius, horizontalPadding, textColor, fontWeight, containerStyle, counterStyle, digitStyle, gradientHeight, gradientFrom, gradientTo, topGradientStyle, bottomGradientStyle, }: CounterProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Counter.d.ts.map