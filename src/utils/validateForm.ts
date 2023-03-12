import { ErrorMessageForm } from '../types/enum';
import { LoginFormValues, SignFormValues } from '../types/interface';

const checkEmail = (email: string): boolean => {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const validateLoginForm = (values: LoginFormValues): Partial<LoginFormValues> => {
  const errors: Partial<LoginFormValues> = {};
  if (values.email === '') {
    errors.email = ErrorMessageForm.required;
  } else if (checkEmail(values.email)) {
    errors.email = ErrorMessageForm.invalidEmail;
  }
  if (values.password === '') {
    errors.password = ErrorMessageForm.required;
  } else if (values.password.length < 7) {
    errors.password = ErrorMessageForm.leastSevenCharacters;
  }
  return errors;
};

export const validateSignForm = (values: SignFormValues): Partial<SignFormValues> => {
  const errors: Partial<SignFormValues> = {};
  if (values.name === '') {
    errors.name = ErrorMessageForm.required;
  } else if (values.name.length < 3) {
    errors.name = ErrorMessageForm.leastThreeCharacters;
  }
  if (values.email === '') {
    errors.email = ErrorMessageForm.required;
  } else if (checkEmail(values.email)) {
    errors.email = ErrorMessageForm.invalidEmail;
  }
  if (values.password === '') {
    errors.password = ErrorMessageForm.required;
  } else if (values.password.length < 7) {
    errors.password = ErrorMessageForm.leastSevenCharacters;
  }
  if (values.passwordConfirm === '') {
    errors.passwordConfirm = ErrorMessageForm.required;
  } else if (values.passwordConfirm.length < 7) {
    errors.passwordConfirm = ErrorMessageForm.leastSevenCharacters;
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = errors.password = ErrorMessageForm.passwordNotMatch;
  }
  return errors;
};
