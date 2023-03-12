import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Sign from '../components/Sign';
import { AuthPath } from '../types/enum';
import { getListClassesBtnAuthForm } from '../utils/functions';

const Authorization = (): JSX.Element => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoginForm = AuthPath.login === pathname;
  const [loginBtnClasses, signBtnClasses] = getListClassesBtnAuthForm(isLoginForm);

  const toggleForm = (path: string): void => {
    navigate(path);
  };

  return (
    <section className="auth dark-bg">
      <div className="wrapper">
        <div className="auth__forms">
          <div className="auth__header">
            <button className={loginBtnClasses} onClick={() => toggleForm(AuthPath.login)}>
              Login
            </button>
            <button className={signBtnClasses} onClick={() => toggleForm(AuthPath.sign)}>
              SignUp
            </button>
          </div>
          {isLoginForm ? <Login /> : <Sign />}
        </div>
      </div>
    </section>
  );
};

export default Authorization;
