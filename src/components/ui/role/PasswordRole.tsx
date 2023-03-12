import { FC, SetStateAction, useRef } from 'react';
import { UserUpdateData } from '../../../store/api/types';

interface PasswordRoleProps {
  setUserPasswordRole: (data: SetStateAction<UserUpdateData>) => void;
}

const PasswordRole = ({ setUserPasswordRole }: PasswordRoleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const passwordRoleHandler = () => {
    if (inputRef.current) {
      const { name, value } = inputRef.current;
      setUserPasswordRole((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <div className="password-role">
      <h3 className="password-role__title">For change role to admin, enter password: </h3>
      <div className="user-data-form__field">
        <input
          ref={inputRef}
          name="passwordRole"
          type="password"
          className="user-data-form__input"
        />
      </div>
      <button
        type="button"
        className="button button_user password-role__button"
        onClick={passwordRoleHandler}
      >
        Confirm
      </button>
    </div>
  );
};

export default PasswordRole;
