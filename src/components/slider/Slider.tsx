import { useEffect, useState } from 'react';
import useInfinitySettingsSlider from '../../hooks/useInfinitySettingsSlider';
import { Direction } from '../../types/enum';
import { SliderImageData } from '../../types/interface';
import { addSlideClones } from '../../utils/slider';
import PreviewSlides from './PreviewSlides';

interface SliderProps {
  listImage: SliderImageData[];
}

const Slider = ({ listImage }: SliderProps) => {
  const [isTransitionEnable, setIsTransitionEnable] = useState<boolean>(true);
  const [images, setImages] = useState<SliderImageData[]>(listImage);
  const [visibleSlide, setVisibleSlide] = useState<number>(1);
  useInfinitySettingsSlider({
    visibleSlide,
    numberOfSlides: images.length,
    setIsTransitionEnable,
    setVisibleSlide,
    transitionSpeed: {
      transitionSlide: 300,
      delayTurnOnTransition: 350,
    },
  });

  useEffect(() => {
    const slidesWithClones = addSlideClones(images);
    setImages(slidesWithClones);
  }, []);

  const moveHandler = (direction: string) => {
    switch (direction) {
      case Direction.LEFT:
        setVisibleSlide((prevImageNumber) => prevImageNumber - 1);
        break;
      case Direction.RIGHT:
        setVisibleSlide((prevImageNumber) => prevImageNumber + 1);
        break;
    }
  };
  
  if(!listImage.length) {
    return <h2>Images is missing</h2>
  }

  return (
    <div>
      <div className="slider">
        <span
          className="slider__btn slider__btn_left"
          onClick={() => moveHandler(Direction.LEFT)}
        ></span>
        <div
          className={`slider__wrapper ${isTransitionEnable ? 'transition' : ''}`}
          style={{ translate: `${visibleSlide * -100}%` }}
        >
          {images.map(({ urlImage }, index) => (
            <div key={index} className="slider__item">
              <img className="slider__image" src={urlImage} alt={`${urlImage}`} />
            </div>
          ))}
        </div>
        <span
          className="slider__btn slider__btn_right"
          onClick={() => moveHandler(Direction.RIGHT)}
        ></span>
        <PreviewSlides
          images={images}
          visibleSlide={visibleSlide}
          setVisibleSlide={setVisibleSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
