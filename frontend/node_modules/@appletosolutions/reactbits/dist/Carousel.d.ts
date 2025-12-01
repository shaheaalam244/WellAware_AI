export interface CarouselItem {
    title: string;
    description: string;
    id: number;
    icon: React.ReactElement;
}
export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
}
export default function Carousel({ items, baseWidth, autoplay, autoplayDelay, pauseOnHover, loop, round, }: CarouselProps): React.JSX.Element;
//# sourceMappingURL=Carousel.d.ts.map