export interface BlobCursorProps {
    blobType?: "circle" | "square";
    fillColor?: string;
    trailCount?: number;
    sizes?: number[];
    innerSizes?: number[];
    innerColor?: string;
    opacities?: number[];
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    filterId?: string;
    filterStdDeviation?: number;
    filterColorMatrixValues?: string;
    useFilter?: boolean;
    fastDuration?: number;
    slowDuration?: number;
    fastEase?: string;
    slowEase?: string;
    zIndex?: number;
}
export default function BlobCursor({ blobType, fillColor, trailCount, sizes, innerSizes, innerColor, opacities, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, filterId, filterStdDeviation, filterColorMatrixValues, useFilter, fastDuration, slowDuration, fastEase, slowEase, zIndex, }: BlobCursorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BlobCursor.d.ts.map