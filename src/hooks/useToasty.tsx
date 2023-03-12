import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface UseToastyProps {
  isSuccess?: boolean;
  isError: boolean;
  messageSuccess?: string;
  messageError?: string;
}

export const useToasty = ({ isSuccess, isError, messageSuccess, messageError }: UseToastyProps) => {
  useEffect(() => {
    if (isSuccess) {
      toast.success(messageSuccess);
    }
    if (isError) {
      toast.error(messageError);
    }
  }, [isSuccess, isError]);
};
