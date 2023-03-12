import { ChangeEvent, MouseEvent, SetStateAction, useRef, useState } from 'react';
import { isValidExtention } from '../../../utils/generate/isValidExtention';
import { toast } from 'react-toastify';
import { UserUpdateData } from '../../../store/api/types';
import { LoadPhotoErrors } from '../../../types/enum';
import RemovePhoto from './RemovePhoto';

interface LoadPhotoProps {
  setPhotoUser: (data: SetStateAction<UserUpdateData>) => void;
}

const LoadPhoto = ({ setPhotoUser }: LoadPhotoProps) => {
  const [photo, setPhoto] = useState<string>('');
  const refInput = useRef<HTMLInputElement>(null);

  const loadBtnHandler = () => {
    refInput.current?.click();
  };

  const fileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const image = files[0];
      const isValidExt = isValidExtention(image.name);
      if (isValidExt === false) {
        toast.error(LoadPhotoErrors.INVALID_EXT);
        return;
      }
      loadFile(image);
    }
  };

  const inputClickHandler = (event: MouseEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  };

  const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const { target } = event;
      if (target && target.result && typeof target.result === 'string') {
        setPhoto(target.result);
        setPhotoUser((prevData) => ({ ...prevData, image: file }));
      }
    };
    reader.onerror = () => {
      toast.error(LoadPhotoErrors.CANT_LOAD);
    };
    reader.readAsDataURL(file);
  };

  const removeFile = () => {
    setPhoto('');
  };

  return (
    <div className="load-photo">
      {photo && (
        <div className="load-photo__preview">
          <img src={photo} alt="Image" className="load-photo__image" />
          <span className="cross-close" onClick={removeFile}></span>
        </div>
      )}
      <input
        ref={refInput}
        type="file"
        onChange={fileHandler}
        onClick={inputClickHandler}
        className="load-photo__input"
      />
      <div className="load-photo__buttons">
        <button
          type="button"
          onClick={loadBtnHandler}
          className="button button_user button_user-load"
        >
          Change photo
        </button>
        <RemovePhoto />
      </div>
    </div>
  );
};

export default LoadPhoto;
