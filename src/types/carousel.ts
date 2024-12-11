export interface CarouselProps {
  children: React.ReactNode;
  autoRotateInterval?: number;
  className?: string;
}

export interface CarouselState {
  currentSlide: number;
  isAutoPlaying: boolean;
}