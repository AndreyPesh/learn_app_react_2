import {
  useRef,
  MouseEvent,
  ChangeEvent,
  useState,
  SetStateAction,
  Dispatch,
  useEffect
} from 'react';
import { SmartphoneDescription } from '../../../types/interface';
import { filterImages } from '../../../utils/admin/helper';
import ImagePreview from './ImagePreview';

interface LoadImagesProps {
  setImagesToState: Dispatch<SetStateAction<SmartphoneDescription>>;
  images?: FileList;
}

const LoadImages = ({ setImagesToState, images }: LoadImagesProps) => {
  const refInput = useRef<HTMLInputElement>(null);
  const [listLoadedFiles, setListLoadedFiles] = useState<string[]>([]);

  const btnAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    refInput.current?.click();
  };

  const fileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const arrayFiles = Array.from(files);
      arrayFiles.map((file) => loadFile(file));
      setImagesToState((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...arrayFiles],
      }));
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
        setListLoadedFiles((prevState) => [...prevState, fileBlob]);
      }
    };
  };

  const removeImage = (index: number) => {
    setImagesToState((prevState) => ({
      ...prevState,
      images: filterImages(prevState.images, index),
    }));
    setListLoadedFiles(() => filterImages(listLoadedFiles, index));
  };


  return (
    <div className="loader-image">
      <div className="loader-image__preview">
        {listLoadedFiles &&
          listLoadedFiles.map((file, index) => (
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
