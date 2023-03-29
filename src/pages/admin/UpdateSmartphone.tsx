import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import { useGetSmartphoneQuery } from '../../store/api/admin/smartphoneApi';
import UpdateImages from '../../components/admin/images/UpdateImages';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import BrandList from '../../components/admin/smartphone/additional/BrandList';
import {
  addDataSmartphone,
  initDataSmartphone,
} from '../../store/slice/adminData/smartphoneDataSlice';

const UpdateSmartphone = () => {
  const { smartphoneId } = useParams();
  const dispatch = useAppDispatch();
  const dataSmartphone = useAppSelector((state) => state.smartphoneDataForm);
  const { data, isLoading, isSuccess } = useGetSmartphoneQuery({ id: smartphoneId! });
  const [updatedImages, setUpdatedImages] = useState<Array<string>>([]);

  useEffect(() => {
    if(data) {
      const { model, display, price, year, cpu, frequency, memory, nfc } = data;
      dispatch(initDataSmartphone({ model, display, price, year, cpu, frequency, memory, nfc, brand: '' }));
    }
  }, [isSuccess]);

  if (!data) {
    return <h2>Cant load data. Something went wrong!</h2>;
  }


  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(dataSmartphone);
  };
  const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    dispatch(addDataSmartphone({ name, value, type, checked }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h2>Update smartphone</h2>
      <form onSubmit={formSubmit} className="form">
        <div className="form__field">
          <label>Model:</label>
          <input
            className="form__input"
            type="text"
            name="model"
            value={dataSmartphone.model}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Display:</label>
          <input
            className="form__input"
            type="text"
            name="display"
            value={dataSmartphone.display}
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
            value={dataSmartphone.price}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Year:</label>
          <input
            className="form__input"
            type="number"
            name="year"
            value={dataSmartphone.year}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>CPU:</label>
          <input
            className="form__input"
            type="text"
            name="cpu"
            value={dataSmartphone.cpu}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Frequency:</label>
          <input
            className="form__input"
            type="number"
            name="frequency"
            value={dataSmartphone.frequency}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Memory:</label>
          <input
            className="form__input"
            type="number"
            name="memory"
            value={dataSmartphone.memory}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>NFC:</label>
          <input
            className="form__input form__input_without-border"
            type="checkbox"
            checked={dataSmartphone.nfc}
            name="nfc"
            value="nfc"
            onChange={formHandler}
          />
        </div>
        <UpdateImages
          imagesList={data.images}
          setUpdatedImages={setUpdatedImages}
          updatedImages={updatedImages}
        />
        <div className="form__button-submit">
          <button className="button button_confirm " type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSmartphone;
