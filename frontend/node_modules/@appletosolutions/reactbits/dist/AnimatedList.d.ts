import React from "react";
interface AnimatedListProps {
    items?: string[];
    onItemSelect?: (item: string, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    itemClassName?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;
}
declare const AnimatedList: React.FC<AnimatedListProps>;
export default AnimatedList;
//# sourceMappingURL=AnimatedList.d.ts.map