import { FC } from "react";
interface MenuItem {
    image: string;
    link: string;
    title: string;
    description: string;
}
interface InfiniteMenuProps {
    items?: MenuItem[];
}
declare const InfiniteMenu: FC<InfiniteMenuProps>;
export default InfiniteMenu;
//# sourceMappingURL=InfiniteMenu.d.ts.map