import {
  useRef,
  MouseEvent,
  ChangeEvent,
  SetStateAction,
  Dispatch,
} from 'react';
import { filterImages } from '../../../utils/admin/helper';
import ImagePreview from './ImagePreview';

interface LoadImagesProps {
  setImagesToState: Dispatch<SetStateAction<Array<string>>>;
  images: Array<string>;
}

const LoadImages = ({ setImagesToState, images }: LoadImagesProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const btnAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    refInput.current?.click();
  };

  const fileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const arrayFiles = Array.from(files);
      arrayFiles.map((file) => loadFile(file));
    }
    if (refInput.current) refInput.current.value = '';
  };

  const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const { target } = event;
      if (target && target.result && typeof target.result === 'string') {
        const fileBlob = target.result;
        setImagesToState((prevState) => prevState.concat(fileBlob));
      }
    };
  };

  const removeImage = (index: number) => {
    setImagesToState((prevState) => filterImages(prevState, index));
  };

  return (
    <div className="loader-image">
      <div className="loader-image__preview">
        {images &&
          images.map((file, index) => (
            <ImagePreview key={index} file={file} remove={() => removeImage(index)} />
          ))}
      </div>
      <div className="">
        <input
          ref={refInput}
          type="file"
          className="loader-image__input"
          onChange={fileHandler}
          multiple
        />
      </div>
      <div>
        <button
          className="button button_confirm"
          type="button"
          data-notclose
          onClick={btnAddHandler}
        >
          Add image
        </button>
      </div>
    </div>
  );
};

export default LoadImages;
