interface FlyingPostersProps extends React.HTMLAttributes<HTMLDivElement> {
    items?: string[];
    planeWidth?: number;
    planeHeight?: number;
    distortion?: number;
    scrollEase?: number;
    cameraFov?: number;
    cameraZ?: number;
}
export default function FlyingPosters({ items, planeWidth, planeHeight, distortion, scrollEase, cameraFov, cameraZ, className, ...props }: FlyingPostersProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FlyingPosters.d.ts.map