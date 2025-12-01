import React from "react";
interface GooeyNavItem {
    label: string;
    href: string;
}
export interface GooeyNavProps {
    items: GooeyNavItem[];
    animationTime?: number;
    particleCount?: number;
    particleDistances?: [number, number];
    particleR?: number;
    timeVariance?: number;
    colors?: number[];
    initialActiveIndex?: number;
}
declare const GooeyNav: React.FC<GooeyNavProps>;
export default GooeyNav;
//# sourceMappingURL=GooeyNav.d.ts.map