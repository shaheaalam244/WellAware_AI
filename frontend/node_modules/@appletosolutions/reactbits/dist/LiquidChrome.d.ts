import React from "react";
interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
    baseColor?: [number, number, number];
    speed?: number;
    amplitude?: number;
    frequencyX?: number;
    frequencyY?: number;
    interactive?: boolean;
}
export declare const LiquidChrome: React.FC<LiquidChromeProps>;
export default LiquidChrome;
//# sourceMappingURL=LiquidChrome.d.ts.map