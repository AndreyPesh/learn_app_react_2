import { Formik, FormikProps } from 'formik';
import { useAppSelector } from '../hooks/store';
import { useLoginUserMutation } from '../store/api/authApi';
import { LoginFormValues } from '../types/interface';
import { NAME_STORAGE_LOGIN_FORM_DATA } from '../utils/constants';
import { validateLoginForm } from '../utils/validateForm';
import PersistLoginForm from './optional/PersistLoginForm';
import LoadButton from './ui/buttons/LoadButton';
import { ErrorResponse } from '../store/api/types';
import useToastyForAuth from '../hooks/useToastyForAuth';
import { AuthMessage } from '../types/enum';

const Login = (): JSX.Element => {
  const currentFormData = useAppSelector((state) => state.loginFormData);

  const [loginUser, { isLoading, isSuccess, error, isError }] = useLoginUserMutation();

  const messageError = error != null ? (error as ErrorResponse).data.message : AuthMessage.wrong;

  const isErrorRequest = useToastyForAuth({
    isSuccess,
    isError,
    messageSuccess: AuthMessage.userLogin,
    messageError,
  });

  return (
    <Formik
      initialValues={currentFormData}
      validate={validateLoginForm}
      onSubmit={async (values) => {
        await loginUser(values);
      }}
    >
      {(props: FormikProps<LoginFormValues>) => (
        <form className="auth__login-form" onSubmit={props.handleSubmit}>
          <div className="auth__field-form auth__field-form_login">
            <label htmlFor="login-email">E-mail:</label>
            <input
              type="text"
              id="login-email"
              className="auth__input"
              name="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            />
            {props.touched.email !== undefined && props.errors.email !== undefined ? (
              <p className="auth__error">{props.errors.email}</p>
            ) : null}
          </div>
          <div className="auth__field-form auth__field-form_password">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              className="auth__input"
              name="password"
              autoComplete="13245"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
            />
            {props.touched.password !== undefined && props.errors.password !== undefined ? (
              <p className="auth__error">{props.errors.password}</p>
            ) : null}
          </div>

          {isErrorRequest && (
            <p className="auth__error auth__error_response">
              {error != null ? messageError : null}
            </p>
          )}

          <LoadButton type="submit" listClass="button auth-button" isLoad={isLoading}>
            Login
          </LoadButton>
          <PersistLoginForm name={NAME_STORAGE_LOGIN_FORM_DATA} />
        </form>
      )}
    </Formik>
  );
};

export default Login;
