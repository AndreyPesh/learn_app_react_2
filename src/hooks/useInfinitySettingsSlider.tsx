import { Dispatch, SetStateAction, useEffect } from 'react';

interface useInfinitySettingsSliderParams {
  visibleSlide: number;
  numberOfSlides: number;
  setIsTransitionEnable: Dispatch<SetStateAction<boolean>>;
  setVisibleSlide: Dispatch<SetStateAction<number>>;
  transitionSpeed: {
    transitionSlide: number;
    delayTurnOnTransition: number;
  };
}

const useInfinitySettingsSlider = ({
  visibleSlide,
  numberOfSlides,
  setIsTransitionEnable,
  setVisibleSlide,
  transitionSpeed
}: useInfinitySettingsSliderParams) => {
  useEffect(() => {
    if (visibleSlide === numberOfSlides - 1) {
      setTimeout(() => {
        setIsTransitionEnable(false);
        setVisibleSlide(1);
      }, transitionSpeed.transitionSlide);
      setTimeout(() => {
        setIsTransitionEnable(true);
      }, transitionSpeed.delayTurnOnTransition);
    }
    if (visibleSlide === 0) {
      setTimeout(() => {
        setIsTransitionEnable(false);
        setVisibleSlide(numberOfSlides - 2);
      }, transitionSpeed.transitionSlide);
      setTimeout(() => {
        setIsTransitionEnable(true);
      }, transitionSpeed.delayTurnOnTransition);
    }
  }, [visibleSlide]);

  return null;
};

export default useInfinitySettingsSlider;
