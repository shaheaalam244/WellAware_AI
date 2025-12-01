import React, { HTMLAttributes, ReactNode } from "react";
interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    backButtonText?: string;
    nextButtonText?: string;
    disableStepIndicators?: boolean;
    renderStepIndicator?: (props: RenderStepIndicatorProps) => ReactNode;
}
interface RenderStepIndicatorProps {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
}
export default function Stepper({ children, initialStep, onStepChange, onFinalStepCompleted, stepCircleContainerClassName, stepContainerClassName, contentClassName, footerClassName, backButtonProps, nextButtonProps, backButtonText, nextButtonText, disableStepIndicators, renderStepIndicator, ...rest }: StepperProps): import("react/jsx-runtime").JSX.Element;
interface StepProps {
    children: ReactNode;
}
export declare function Step({ children }: StepProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stepper.d.ts.map