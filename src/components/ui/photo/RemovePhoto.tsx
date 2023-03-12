import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRemovePhotoMutation } from '../../../store/api/userApi';

const RemovePhoto = () => {
  const [removePhoto, { isError }] = useRemovePhotoMutation();

  useEffect(() => {
    if (isError) {
      toast.error('Cant remove photo');
    }
  }, [isError]);

  const removePhotoHandler = () => {
    removePhoto();
  };

  return (
    <button
      type="button"
      className="button button_user button_user-remove"
      onClick={removePhotoHandler}
    >
      Remove photo
    </button>
  );
};

export default RemovePhoto;
