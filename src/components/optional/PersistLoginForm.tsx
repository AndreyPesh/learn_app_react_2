import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { setCurrentFormData } from '../../store/slice/loginSlice';
import { LoginFormValues } from '../../types/interface';
import { setStorageLoginFormData } from '../../utils/storage/localStorage';

const PersistLoginForm = ({ name }: { name: string }): null => {
  const dispatch = useAppDispatch();
  const { values } = useFormikContext<LoginFormValues>();

  useEffect(() => {
    return () => {
      setStorageLoginFormData(name, values);
      dispatch(setCurrentFormData(values));
    };
  }, [values]);

  return null;
};

export default PersistLoginForm;
