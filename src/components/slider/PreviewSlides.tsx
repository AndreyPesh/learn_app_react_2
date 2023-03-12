import { Dispatch, SetStateAction } from 'react';
import { SliderImageData } from '../../types/interface';
import { addActiveDot } from '../../utils/slider';

interface PreviewSlidesProps {
  images: SliderImageData[],
  visibleSlide: number,
  setVisibleSlide: Dispatch<SetStateAction<number>>
} 

const PreviewSlides = ({images, visibleSlide, setVisibleSlide}: PreviewSlidesProps) => {
  return (
    <div className="slider__preview-list">
      {images.map(({ urlImage }, index) => {
        if (index === 0 || index === images.length - 1) return null;
        return (
          <div
            key={index}
            className={`slider__preview-item ${
              addActiveDot(index, visibleSlide, images.length) ? 'slider__preview-item_active' : ''
            }`}
            onClick={() => setVisibleSlide(index)}
          >
            <img
              className={`slider__preview-image`}
              src={urlImage}
              alt={`${urlImage}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PreviewSlides;
