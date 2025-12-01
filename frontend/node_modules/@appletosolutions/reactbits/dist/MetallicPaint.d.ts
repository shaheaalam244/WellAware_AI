type ShaderParams = {
    patternScale: number;
    refraction: number;
    edge: number;
    patternBlur: number;
    liquid: number;
    speed: number;
};
export declare function parseLogoImage(file: File): Promise<{
    imageData: ImageData;
    pngBlob: Blob;
}>;
export default function MetallicPaint({ imageData, params, }: {
    imageData: ImageData;
    params: ShaderParams;
}): void;
export {};
//# sourceMappingURL=MetallicPaint.d.ts.map