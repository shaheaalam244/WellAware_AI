import { JSX } from "react";
interface PixelCardProps {
    variant?: "default" | "blue" | "yellow" | "pink";
    gap?: number;
    speed?: number;
    colors?: string;
    noFocus?: boolean;
    className?: string;
    children: React.ReactNode;
}
export default function PixelCard({ variant, gap, speed, colors, noFocus, className, children, }: PixelCardProps): JSX.Element;
export {};
//# sourceMappingURL=PixelCard.d.ts.map