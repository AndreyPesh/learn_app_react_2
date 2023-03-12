import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Links } from '../types/enum';

interface ToastyForAuthProps {
  isSuccess: boolean;
  isError: boolean;
  messageSuccess: string;
  messageError: string;
  redirectToMain?: boolean;
}

const useToastyForAuth = ({
  isSuccess,
  isError,
  messageSuccess,
  messageError,
  redirectToMain = true
}: ToastyForAuthProps): boolean => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success(messageSuccess);
      if(redirectToMain) {
        navigate(Links.main);
      }
    }
    if (isError) {
      toast.error(messageError);
    }
  }, [isSuccess, isError]);
  return isError;
};

export default useToastyForAuth;
