import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import { Links } from '../../types/enum';
import { BASE_URL, DEFAULT_PHOTO_PATH } from '../../utils/constants';
import LogoutButton from './buttons/LogoutButton';

const UserManagement = (): JSX.Element => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.userData);

  const userPageHandler = (): void => {
    navigate(Links.user);
  };

  const urlPhoto = BASE_URL + `/${user?.photo}`;

  return (
    <div className="user-management">
      <div className="user-data" onClick={userPageHandler}>
        <img src={user?.photo ? urlPhoto : DEFAULT_PHOTO_PATH} alt="User photo" />
        <p className="user-data__name">{user ? user.name : 'Guest'}</p>
      </div>
      <LogoutButton />
    </div>
  );
};

export default UserManagement;
