import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../../../store/api/authApi';
import { Links } from '../../../types/enum';

const LogoutButton = (): JSX.Element => {
  const navigate = useNavigate();
  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  const logout = async (): Promise<void> => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(Links.main);
    }
  }, [isLoading]);
  return <span className="user-logout-btn" onClick={logout}></span>;
};

export default LogoutButton;
