interface TiltedCardProps {
    imageSrc: React.ComponentProps<"img">["src"];
    altText?: string;
    captionText?: string;
    containerHeight?: React.CSSProperties["height"];
    containerWidth?: React.CSSProperties["width"];
    imageHeight?: React.CSSProperties["height"];
    imageWidth?: React.CSSProperties["width"];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
}
export default function TiltedCard({ imageSrc, altText, captionText, containerHeight, containerWidth, imageHeight, imageWidth, scaleOnHover, rotateAmplitude, showMobileWarning, showTooltip, overlayContent, displayOverlayContent, }: TiltedCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TiltedCard.d.ts.map