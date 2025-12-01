interface StackProps {
    randomRotation?: boolean;
    sensitivity?: number;
    cardDimensions?: {
        width: number;
        height: number;
    };
    sendToBackOnClick?: boolean;
    cardsData?: {
        id: number;
        img: string;
    }[];
    animationConfig?: {
        stiffness: number;
        damping: number;
    };
}
export default function Stack({ randomRotation, sensitivity, cardDimensions, cardsData, animationConfig, sendToBackOnClick, }: StackProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stack.d.ts.map