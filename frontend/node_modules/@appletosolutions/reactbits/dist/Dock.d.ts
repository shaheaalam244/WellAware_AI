import { type SpringOptions } from "framer-motion";
import React from "react";
export type DockItemData = {
    icon: React.ReactNode;
    label: React.ReactNode;
    onClick: () => void;
    className?: string;
};
export type DockProps = {
    items: DockItemData[];
    className?: string;
    distance?: number;
    panelHeight?: number;
    baseItemSize?: number;
    dockHeight?: number;
    magnification?: number;
    spring?: SpringOptions;
};
export default function Dock({ items, className, spring, magnification, distance, panelHeight, dockHeight, baseItemSize, }: DockProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Dock.d.ts.map