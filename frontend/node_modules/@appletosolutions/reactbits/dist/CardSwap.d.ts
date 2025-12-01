import React, { ReactNode } from "react";
export interface CardSwapProps {
    width?: number | string;
    height?: number | string;
    cardDistance?: number;
    verticalDistance?: number;
    delay?: number;
    pauseOnHover?: boolean;
    onCardClick?: (idx: number) => void;
    skewAmount?: number;
    easing?: "linear" | "elastic";
    children: ReactNode;
}
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    customClass?: string;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardSwap: React.FC<CardSwapProps>;
export default CardSwap;
//# sourceMappingURL=CardSwap.d.ts.map