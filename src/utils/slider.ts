import { SliderImageData } from '../types/interface';

export const addSlideClones = (slides: SliderImageData[]) => {
  const slidesWithClones = [...slides];
  slidesWithClones.unshift({ ...slides[slides.length - 1] });
  slidesWithClones.push({ ...slides[0] });
  return slidesWithClones;
};

export const addActiveDot = (index: number, visibleSlide: number, lengthSlider: number) => {
  return (
    index === visibleSlide ||
    (index === 1 && visibleSlide === lengthSlider - 1) ||
    (index === lengthSlider - 2 && visibleSlide === 0)
  );
};
