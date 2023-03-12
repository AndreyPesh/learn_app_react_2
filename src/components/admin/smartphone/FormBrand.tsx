import { FormEvent, useRef } from 'react';
import { useToasty } from '../../../hooks/useToasty';
import { useAddBrandMutation } from '../../../store/api/admin/smartphoneBrandApi';

const FormBrand = () => {
  const refInputBrand = useRef<HTMLInputElement>(null);
  const [addBrand, { isSuccess, isError }] = useAddBrandMutation();
  useToasty({
    isSuccess,
    isError,
    messageSuccess: 'Brand success added',
    messageError: 'Something went wrong',
  });

  const addBrandHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (refInputBrand.current) {
      const brand = refInputBrand.current.value;
      addBrand({ brand });
    }
  };
  return (
    <form onSubmit={addBrandHandler} className="form">
      <div className="form__field">
        <label htmlFor="brand">Add brand:</label>
        <input className="form__input" type="text" ref={refInputBrand} defaultValue={'Samsung'} />
      </div>
      <div className="form__button-submit">
        <button className="button button_submit" type="submit">
          addBrand
        </button>
      </div>
    </form>
  );
};

export default FormBrand;
