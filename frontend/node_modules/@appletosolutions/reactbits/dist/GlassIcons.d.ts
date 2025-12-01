import React from "react";
export interface GlassIconsItem {
    icon: React.ReactElement;
    color: string;
    label: string;
    customClass?: string;
}
export interface GlassIconsProps {
    items: GlassIconsItem[];
    className?: string;
}
declare const GlassIcons: React.FC<GlassIconsProps>;
export default GlassIcons;
//# sourceMappingURL=GlassIcons.d.ts.map