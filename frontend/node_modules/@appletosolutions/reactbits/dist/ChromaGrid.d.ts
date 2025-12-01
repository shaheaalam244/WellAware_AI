import React from "react";
export interface ChromaItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}
export interface ChromaGridProps {
    items?: ChromaItem[];
    className?: string;
    radius?: number;
    columns?: number;
    rows?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}
export declare const ChromaGrid: React.FC<ChromaGridProps>;
export default ChromaGrid;
//# sourceMappingURL=ChromaGrid.d.ts.map