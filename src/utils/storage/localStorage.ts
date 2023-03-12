import { LoginFormValues } from '../../types/interface';
import { initValuesLoginForm } from '../constants';

export const setStorageLoginFormData = (key: string, data: LoginFormValues): void => {
  const values = JSON.stringify(data);
  localStorage.setItem(key, values);
};

export const getStorageLoginFormData = (key: string): LoginFormValues => {
  const currentResult = localStorage.getItem(key);
  if (currentResult !== null) {
    return JSON.parse(currentResult);
  }
  setStorageLoginFormData(key, initValuesLoginForm);
  return initValuesLoginForm;
};
