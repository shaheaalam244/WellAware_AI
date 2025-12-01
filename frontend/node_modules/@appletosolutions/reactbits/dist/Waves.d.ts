import React, { CSSProperties } from "react";
interface WavesProps {
    lineColor?: string;
    backgroundColor?: string;
    waveSpeedX?: number;
    waveSpeedY?: number;
    waveAmpX?: number;
    waveAmpY?: number;
    xGap?: number;
    yGap?: number;
    friction?: number;
    tension?: number;
    maxCursorMove?: number;
    style?: CSSProperties;
    className?: string;
}
declare const Waves: React.FC<WavesProps>;
export default Waves;
//# sourceMappingURL=Waves.d.ts.map