import { HTMLMotionProps } from 'framer-motion';
interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'view' | 'hover';
}
export default function DecryptedText({ text, speed, maxIterations, sequential, revealDirection, useOriginalCharsOnly, characters, className, parentClassName, encryptedClassName, animateOn, ...props }: DecryptedTextProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DecryptedText.d.ts.map