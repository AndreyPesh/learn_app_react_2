import { UserUpdateData } from '../../store/api/types';

export const addUserDataToForm = (userData: UserUpdateData) => {
  const form = new FormData();
  let key: keyof UserUpdateData;
  for (key in userData) {
    const fieldForm = userData[key];
    if (fieldForm && key) {
      form.append(key, fieldForm);
    }
  }
  return form;
};
