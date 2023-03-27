import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadImages from '../../components/admin/images/LoadImages';
import Loader from '../../components/ui/Loader';
import { useGetSmartphoneQuery } from '../../store/api/admin/smartphoneApi';
import { SmartphoneDescription } from '../../types/interface';
import { BASE_URL } from '../../utils/constants';
import UpdateImages from '../../components/admin/images/UpdateImages';

// const initState = {
//   model: '',
//   display: '',
//   brand: '',
//   price: 0,
//   year: 2020,
//   cpu: '',
//   frequency: 4000,
//   memory: 2000,
//   nfc: true,
//   images: []
// }

// const loadImage = async (imageName: string) => {
//   const url = BASE_URL + '/' + imageName;
//   const imageBlob = await axios.get(url);
//   return imageBlob.data;
// }

const UpdateSmartphone = () => {
  const { smartphoneId } = useParams();
  const { data, isLoading, isSuccess } = useGetSmartphoneQuery({ id: smartphoneId! });
  // const [dataSmartphone, setDataSmartphone] = useState<SmartphoneDescription>(initState);
  const [imagesState, setImages] = useState<Array<string>>([])
  const [imagesBlob, setImagesBlob] = useState<FileList>()

  // useEffect(() => {
  //   if (data) {
  //     const { model, display, price, year, cpu, frequency, memory } = data;
  //     const brand = data.brand.brand;
  //     const images = data.images ?? [];
  //     // console.log(images.map(image => image.name))
  //     // setDataSmartphone({model, display, price, year, cpu, frequency, memory, brand})
  //     setImages(images.map(image => image.name))
  //   }
  //   const load = async () => {
  //     // console.log(imagesState)
  //     const imagesList = await Promise.all(imagesState.map(name => loadImage(name)))
  //     // console.log(imagesList)
  //     const dt = new DataTransfer();
  //     const list = imagesList.map((image, index) => {
  //       const file = new File([image], `${index}.jpg`, {type: 'image/jpeg'});
  //       dt.items.add(file);
  //     })
  //     const FileList = dt.files;
  //     // console.log(FileList)
  //     setImagesBlob(FileList)
  //   }
  //   load()
  // }, [isSuccess]);

  if (!data) {
    return <h2>Cant load data. Something went wrong!</h2>;
  }

  const { model, display, price, year, cpu, frequency, memory, images } = data;

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(dataSmartphone);
  };
  const formHandler = () => {};

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
            value={model}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Display:</label>
          <input
            className="form__input"
            type="text"
            name="display"
            value={display}
            onChange={formHandler}
          />
        </div>
        {/* <BrandList selectBrand={setDataSmartphone} /> */}
        <div className="form__field">
          <label>Price:</label>
          <input
            className="form__input"
            type="number"
            name="price"
            value={price}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Year:</label>
          <input
            className="form__input"
            type="number"
            name="year"
            value={year}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>CPU:</label>
          <input
            className="form__input"
            type="text"
            name="cpu"
            value={cpu}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Frequency:</label>
          <input
            className="form__input"
            type="number"
            name="frequency"
            value={frequency}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Memory:</label>
          <input
            className="form__input"
            type="number"
            name="memory"
            value={memory}
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
        {/* <LoadImages setImagesToState={setDataSmartphone} images={imagesBlob} /> */}
        <UpdateImages imagesList={images} />
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
