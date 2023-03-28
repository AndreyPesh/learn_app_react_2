import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { useToasty } from '../../../hooks/useToasty';
import { useAddSmartphoneMutation } from '../../../store/api/admin/smartphoneApi';
import {
  addDataSmartphone,
  resetDataSmartphone,
} from '../../../store/slice/adminData/smartphoneDataSlice';
import { addDataToDataForm } from '../../../utils/admin/helper';
import LoadImages from '../images/LoadImages';
import BrandList from './additional/BrandList';

const FormSmartphone = () => {
  const dataSmartphone = useAppSelector((state) => state.smartphoneDataForm);
  const [images, setImages] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const [addSmartphone, { isError, isSuccess }] = useAddSmartphoneMutation();

  useToasty({
    isSuccess,
    isError,
    messageSuccess: 'Smartphone added',
    messageError: 'Something went wrong',
  });

  const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    dispatch(addDataSmartphone({ name, value, type, checked }));
  };

  const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const unitedDataSmartphone = { ...dataSmartphone, images };
    const form = addDataToDataForm(unitedDataSmartphone);

    await addSmartphone(form);

    dispatch(resetDataSmartphone());
    setImages([]);
  };

  return (
    <>
      <h2>Add new smartphone</h2>
      <form onSubmit={formSubmit} className="form">
        <div className="form__field">
          <label>Model:</label>
          <input
            className="form__input"
            type="text"
            name="model"
            value={dataSmartphone?.model}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Display:</label>
          <input
            className="form__input"
            type="text"
            name="display"
            value={dataSmartphone?.display}
            onChange={formHandler}
          />
        </div>
        <BrandList />
        <div className="form__field">
          <label>Price:</label>
          <input
            className="form__input"
            type="number"
            name="price"
            value={dataSmartphone?.price}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Year:</label>
          <input
            className="form__input"
            type="number"
            name="year"
            value={dataSmartphone?.year}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>CPU:</label>
          <input
            className="form__input"
            type="text"
            name="cpu"
            value={dataSmartphone?.cpu}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Frequency:</label>
          <input
            className="form__input"
            type="number"
            name="frequency"
            value={dataSmartphone?.frequency}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Memory:</label>
          <input
            className="form__input"
            type="number"
            name="memory"
            value={dataSmartphone?.memory}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>NFC:</label>
          <input
            className="form__input form__input_without-border"
            type="checkbox"
            name="nfc"
            value="nfc"
            onChange={formHandler}
          />
        </div>
        <LoadImages setImagesToState={setImages} images={images} />
        <div className="form__button-submit">
          <button className="button button_submit " type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSmartphone;
