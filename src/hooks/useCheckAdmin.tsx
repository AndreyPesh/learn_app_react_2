import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Links } from '../types/enum';
import { SetStateBooleanAction } from '../types/types';
import { isUserAdmin } from '../utils/admin/helper';

const useCheckAdmin = (setLoad: SetStateBooleanAction) => {
  const navigation = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const isAdmin = await isUserAdmin();
        if (!isAdmin) {
          navigation(Links.main);
        }
      } finally {
        setLoad(false);
      }
    };
    checkAdmin();
  }, []);

  return null;
};

export default useCheckAdmin;
