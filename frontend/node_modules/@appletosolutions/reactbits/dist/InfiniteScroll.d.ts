import React, { ReactNode } from "react";
interface InfiniteScrollItem {
    content: ReactNode;
}
interface InfiniteScrollProps {
    width?: string;
    maxHeight?: string;
    negativeMargin?: string;
    items?: InfiniteScrollItem[];
    itemMinHeight?: number;
    isTilted?: boolean;
    tiltDirection?: "left" | "right";
    autoplay?: boolean;
    autoplaySpeed?: number;
    autoplayDirection?: "down" | "up";
    pauseOnHover?: boolean;
}
declare const InfiniteScroll: React.FC<InfiniteScrollProps>;
export default InfiniteScroll;
//# sourceMappingURL=InfiniteScroll.d.ts.map