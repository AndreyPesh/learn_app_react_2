import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { userApi } from '../store/api/userApi';
import { NAME_COOKIE_LOGGED } from '../utils/constants';
import { useAppDispatch, useAppSelector } from './store';

const cook = new Cookies();

const useAuth = (): boolean => {
  const { user } = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const isLoggedToken = cook.get(NAME_COOKIE_LOGGED) as boolean;

  useEffect(() => {
    if (isLoggedToken || user == null) {
      dispatch(userApi.endpoints.getMe.initiate(null));
    }
  }, []);
  return user !== null;
};

export default useAuth;
