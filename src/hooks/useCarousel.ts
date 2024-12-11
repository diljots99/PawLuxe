import { useState, useEffect, useCallback } from 'react';
import type { CarouselState } from '../types/carousel';

export function useCarousel(slideCount: number, interval = 5000) {
  const [state, setState] = useState<CarouselState>({
    currentSlide: 0,
    isAutoPlaying: true,
  });

  const nextSlide = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentSlide: (prev.currentSlide + 1) % slideCount,
    }));
  }, [slideCount]);

  const previousSlide = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentSlide: (prev.currentSlide - 1 + slideCount) % slideCount,
    }));
  }, [slideCount]);

  const goToSlide = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentSlide: index,
    }));
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isAutoPlaying: !prev.isAutoPlaying,
    }));
  }, []);

  useEffect(() => {
    if (state.isAutoPlaying) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [state.isAutoPlaying, nextSlide, interval]);

  return {
    currentSlide: state.currentSlide,
    isAutoPlaying: state.isAutoPlaying,
    nextSlide,
    previousSlide,
    goToSlide,
    toggleAutoPlay,
  };
}