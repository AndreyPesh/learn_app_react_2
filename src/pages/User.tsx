import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import LoadPhoto from '../components/ui/photo/LoadPhoto';
import SelectRole from '../components/ui/role/SelectRole';
import { useAppSelector } from '../hooks/store';
import useToastyForAuth from '../hooks/useToastyForAuth';
import { ErrorResponse, UserUpdateData } from '../store/api/types';
import { useUpdateUserMutation } from '../store/api/userApi';
import { AuthMessage } from '../types/enum';
import { initUserData } from '../utils/constants';
import { addUserDataToForm } from '../utils/user/helpers';

const UserPage = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.userData);
  const [userData, setUserData] = useState<UserUpdateData>(initUserData);
  const [updateUser, { error, isError, isSuccess, isLoading }] = useUpdateUserMutation();

  const messageError = error != null ? (error as ErrorResponse).data.message : AuthMessage.wrong;

  const isErrorRequest = useToastyForAuth({
    isSuccess,
    isError,
    messageSuccess: AuthMessage.userUpdated,
    messageError,
    redirectToMain: false,
  });

  const userDataHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = addUserDataToForm(userData);
    await updateUser(form);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  return (
    <div className="container">
      <form onSubmit={userDataHandler} className="user-data-form">
        <div className="user-data-form__field">
          <label>User:</label>
          <input
            className="user-data-form__input"
            name="name"
            value={userData.name}
            onChange={inputHandler}
          />
        </div>
        <div className="user-data-form__field">
          <label>E-mail:</label>
          <input
            className="user-data-form__input"
            name="email"
            value={userData.email}
            onChange={inputHandler}
          />
        </div>
        <SelectRole currentRole={userData.role} setUserRole={setUserData} />
        <LoadPhoto setPhotoUser={setUserData} />
        <button type="submit" className="button button_user" disabled={isLoading}>
          Save data
        </button>
      </form>
      {isErrorRequest && (
        <p className="auth__error auth__error_response">{error != null ? messageError : null}</p>
      )}
    </div>
  );
};

export default UserPage;
