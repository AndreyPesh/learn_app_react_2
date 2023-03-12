export const BASE_URL = 'http://localhost:5050';
export const DEFAULT_PHOTO_PATH = './avatar.svg';
export const DEFAULT_IMAGE_NAME = './product.svg';

export const listLang = [
  { value: 'english', lang: 'En' },
  { value: 'russian', lang: 'Ru' },
];

export const initValuesLoginForm = {
  email: '',
  password: '',
};

export const initValuesSignForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export const initUserData = {
  name: '',
  email: '',
  role: '',
  photo: '',
};

export const initSmartphoneData = {
  model: '',
  display: '',
  brand: '',
  price: 0,
  year: 1900,
  cpu: '',
  frequency: 0,
  memory: 0,
  nfc: false,
  images: [],
};

export const listClassesLoginForm = ['button-auth', 'button-auth_login'];
export const listClassesSignForm = ['button-auth', 'button-auth_sign'];
export const activeButtonClass = ['active'];

export const NAME_STORAGE_LOGIN_FORM_DATA = 'login-form';

export const DELAY_TIME_TOAST = 300;

export const NAME_COOKIE_LOGGED = 'logged_in';

export const MODAL_CLASS_DESTROY = 'hide';

export const TAG_NAME_SPAN = 'SPAN';
export const TAG_NAME_BUTTON = 'BUTTON';

export const NAME_CLASS_ACTIVE_BURGER = 'active';

export const ID_SMARTPHONE_PARAM = ':smartphoneId';
