import { RefObject, HTMLAttributes } from "react";
interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
    label: string;
    fromFontVariationSettings: string;
    toFontVariationSettings: string;
    containerRef: RefObject<HTMLElement>;
    radius?: number;
    falloff?: "linear" | "exponential" | "gaussian";
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}
declare const VariableProximity: import("react").ForwardRefExoticComponent<VariableProximityProps & import("react").RefAttributes<HTMLSpanElement>>;
export default VariableProximity;
//# sourceMappingURL=VariableProximity.d.ts.map