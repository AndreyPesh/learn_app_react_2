import {
  activeButtonClass,
  BASE_URL,
  listClassesLoginForm,
  listClassesSignForm,
  NAME_CLASS_ACTIVE_BURGER,
} from './constants';

export const getListClassesBtnAuthForm = (isLoginForm: boolean): string[] => {
  let loginBtnClasses = '';
  let signBtnClasses = '';
  if (isLoginForm) {
    loginBtnClasses = listClassesLoginForm.concat(activeButtonClass).join(' ');
    signBtnClasses = listClassesSignForm.join(' ');
  } else {
    loginBtnClasses = listClassesLoginForm.join(' ');
    signBtnClasses = listClassesSignForm.concat(activeButtonClass).join(' ');
  }
  return [loginBtnClasses, signBtnClasses];
};

export const selectClassesModal = (isShow: boolean) => {
  if (isShow) {
    return ['modal', 'show'];
  }
  return ['modal', 'close'];
};

export const addRemoveClassToBody = (state: boolean) => {
  if (!state) {
    document.body.classList.add(NAME_CLASS_ACTIVE_BURGER);
  } else {
    document.body.classList.remove(NAME_CLASS_ACTIVE_BURGER);
  }
};

export const createRoutePage = (route: string, parameter: string) => {
  return route + '/' + parameter;
};

export const createUrlImage = (name: string) => {
  return `${BASE_URL}/${name}`;
};
