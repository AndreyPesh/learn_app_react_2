import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageData } from '../../../types/interface';
import { BASE_URL } from '../../../utils/constants';

interface UpdateImagesProps {
  imagesList: ImageData[];
}

const UpdateImages = ({ imagesList }: UpdateImagesProps) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    const loadImage = async () => {
      const {data} = await axios.get(BASE_URL + '/' + imagesList[0].name, {
        responseType: 'blob'
      });
      // setImage(data)
      // const response = await axios.get(BASE_URL + '/' + imagesList[0].name);
      // const res = URL.createObjectURL(data)
      // console.log(res)
      const reader = new FileReader()
      reader.readAsDataURL(data)

      reader.onload = () => {
        setImage(reader.result as string)
      }

    };
    loadImage();
  }, []);

  return (
    <div>
      update images
      {/* {imagesList.map(({ name, id }) => (
        <img key={id} src={BASE_URL + '/' + name} alt={name} />
      ))} */}
      <img src={image} />
      {/* <img src={BASE_URL + '/' + imagesList[0].name}/> */}
    </div>
  );
};

export default UpdateImages;
