import React, { ReactNode, HTMLAttributes } from "react";
interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    padding?: number;
    disabled?: boolean;
    magnetStrength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    wrapperClassName?: string;
    innerClassName?: string;
}
declare const Magnet: React.FC<MagnetProps>;
export default Magnet;
//# sourceMappingURL=Magnet.d.ts.map