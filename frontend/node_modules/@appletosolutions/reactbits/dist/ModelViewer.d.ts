import { FC } from "react";
export interface ViewerProps {
    url: string;
    width?: number | string;
    height?: number | string;
    modelXOffset?: number;
    modelYOffset?: number;
    defaultRotationX?: number;
    defaultRotationY?: number;
    defaultZoom?: number;
    minZoomDistance?: number;
    maxZoomDistance?: number;
    enableMouseParallax?: boolean;
    enableManualRotation?: boolean;
    enableHoverRotation?: boolean;
    enableManualZoom?: boolean;
    ambientIntensity?: number;
    keyLightIntensity?: number;
    fillLightIntensity?: number;
    rimLightIntensity?: number;
    environmentPreset?: "city" | "sunset" | "night" | "dawn" | "studio" | "apartment" | "forest" | "park" | "none";
    autoFrame?: boolean;
    placeholderSrc?: string;
    showScreenshotButton?: boolean;
    fadeIn?: boolean;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    onModelLoaded?: () => void;
}
declare const ModelViewer: FC<ViewerProps>;
export default ModelViewer;
//# sourceMappingURL=ModelViewer.d.ts.map