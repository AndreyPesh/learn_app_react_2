import { useFormik } from 'formik';
import useToastyForAuth from '../hooks/useToastyForAuth';
import { useRegisterUserMutation } from '../store/api/authApi';
import { ErrorResponse } from '../store/api/types';
import { AuthMessage } from '../types/enum';
import { SignFormValues } from '../types/interface';
import { initValuesSignForm } from '../utils/constants';
import { validateSignForm } from '../utils/validateForm';
import LoadButton from './ui/buttons/LoadButton';

const Sign = (): JSX.Element => {
  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();

  const messageError = error != null ? (error as ErrorResponse).data.message : AuthMessage.wrong;

  const isErrorRequest = useToastyForAuth({
    isSuccess,
    isError,
    messageSuccess: AuthMessage.userRegistered,
    messageError,
  });

  const formik = useFormik<SignFormValues>({
    initialValues: initValuesSignForm,
    validate: validateSignForm,
    onSubmit: async (values) => {
      await registerUser(values);
    },
  });

  return (
    <form className="auth__login-form" onSubmit={formik.handleSubmit}>
      <div className="auth__field-form">
        <label htmlFor="sign-name">Name:</label>
        <input
          type="text"
          id="sign-name"
          className="auth__input auth__input_text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name !== undefined && formik.errors.name !== undefined ? (
          <p className="auth__error">{formik.errors.name}</p>
        ) : null}
      </div>
      <div className="auth__field-form">
        <label htmlFor="sign-email">Email:</label>
        <input
          type="email"
          id="sign-email"
          className="auth__input auth__input_text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email !== undefined && formik.errors.email !== undefined ? (
          <p className="auth__error">{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="auth__field-form">
        <label htmlFor="sign-password">Password:</label>
        <input
          type="password"
          id="sign-password"
          className="auth__input auth__input_text"
          name="password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password !== undefined && formik.errors.password !== undefined ? (
          <p className="auth__error">{formik.errors.password}</p>
        ) : null}
      </div>
      <div className="auth__field-form">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input
          type="password"
          id="confirm-password"
          className="auth__input auth__input_text"
          name="passwordConfirm"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirm}
        />
        {formik.touched.passwordConfirm !== undefined &&
        formik.errors.passwordConfirm !== undefined ? (
          <p className="auth__error">{formik.errors.passwordConfirm}</p>
        ) : null}
      </div>

      {isErrorRequest && (
        <p className="auth__error auth__error_response">{error != null ? messageError : null}</p>
      )}

      <LoadButton type="submit" listClass="button auth-button" isLoad={isLoading}>
        Sign
      </LoadButton>
    </form>
  );
};

export default Sign;
