import axios from 'axios';
import { SmartphoneDescription } from '../../types/interface';
import { BASE_URL } from '../constants';

const URL_CHECK_ADMIN = '/api/admin/check';
const DELETE_COUNT_IMAGES = 1;

export const isUserAdmin = async () => {
  try {
    const { data } = await axios.get<{ admin: boolean }>(BASE_URL + URL_CHECK_ADMIN, {
      withCredentials: true,
    });
    return data.admin;
  } catch {
    console.error('Error check admin');
    return false;
  }
};

export const filterImages = <T>(images: Array<T>, index: number): Array<T> => {
  const arrayImageCopy = [...images];
  arrayImageCopy.splice(index, DELETE_COUNT_IMAGES);
  return arrayImageCopy;
};

export const addDataToDataForm = (dataSmartphone: SmartphoneDescription) => {
  const formData = new FormData();
  let key: keyof SmartphoneDescription;

  for (key in dataSmartphone) {
    const dataField = dataSmartphone[key];

    if (Array.isArray(dataField)) {
      dataField.map((image) => {
        const imageFile = dataURLtoFile(image);
        formData.append('images', imageFile);
      });
    } else if (typeof dataField === 'number' || typeof dataField === 'boolean') {
      formData.append(key, String(dataField));
    } else {
      formData.append(key, dataField);
    }
  }
  return formData;
};

export const filterProductsByStatus = <T extends Array<string>>(
  products: T,
  id: string,
  status: boolean
) => {
  const cloneProducts = [...products];
  if (status) {
    cloneProducts.push(id);
    return cloneProducts;
  }
  return cloneProducts.filter((product) => product !== id);
};

function dataURLtoFile(dataUrl: string) {
  const data = dataUrl.split(',');
  const dataAboutFile = data[0].split(';')[0].split('/');
  const extension = dataAboutFile.pop() as string;
  const filename = generateNameImage(extension);

  const mimeType = data[0].match(/:(.*?);/)![1];
  const baseStr = window.atob(data[1]);
  let counter = baseStr.length;
  let u8array = new Uint8Array(counter);

  while (counter--) {
    u8array[counter] = baseStr.charCodeAt(counter);
  }

  return new File([u8array], filename, { type: mimeType });
}

function generateNameImage(extension: string) {
  const maxIndexId = 5000;
  const minIndexId = 1;
  const time = Date.now().toString();
  const randomId = Math.random() * (maxIndexId - minIndexId) + minIndexId;
  return `${randomId}_${time}.${extension}`;
}
