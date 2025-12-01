import React from "react";
type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
};
declare const StarBorder: <T extends React.ElementType = "button">({ as, className, color, speed, children, ...rest }: StarBorderProps<T>) => import("react/jsx-runtime").JSX.Element;
export default StarBorder;
//# sourceMappingURL=StarBorder.d.ts.map