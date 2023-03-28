export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SmartphoneDescription {
  model: string;
  display: string;
  brand: string;
  price: string;
  year: string;
  cpu: string;
  frequency: string;
  memory: string;
  nfc: boolean;
  images: string[];
}

export interface SmartphoneData {
  id: string;
  model: string;
  display: string;
  price: number;
  year: number;
  cpu: string;
  frequency: number;
  memory: number;
  nfc: boolean;
  brand: BrandData;
  images: ImageData[];
}

export interface BrandData {
  id: string;
  brand: string;
}

export interface ImageData {
  id: string;
  name: string;
}

export interface SliderImageData {
  urlImage: string;
}

export interface CheckboxHandlerParams {
  status: boolean;
}
