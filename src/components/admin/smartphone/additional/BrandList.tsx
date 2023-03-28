import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/store';
import { useToasty } from '../../../../hooks/useToasty';
import { useGetBrandsQuery } from '../../../../store/api/admin/smartphoneBrandApi';
import { addBrandSmartphone } from '../../../../store/slice/adminData/smartphoneDataSlice';

const BrandList = () => {
  const dispatch = useAppDispatch();
  const { data, isError } = useGetBrandsQuery(null);

  useToasty({ isError, messageError: 'Error load brand' });

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(addBrandSmartphone(value));
  };

  useEffect(() => {
    data && data.length > 0 && dispatch(addBrandSmartphone(data[0].brand));
  }, [data]);

  return (
    <div className="form__field">
      <label htmlFor="list-brand">Brand:</label>
      <select className="form__input" name="brand" id="list-brand" onChange={selectHandler}>
        {data && data.length > 0 ? (
          data.map(({ id, brand }) => (
            <option key={id} value={brand}>
              {brand}
            </option>
          ))
        ) : (
          <option value={'no brand'}>No brands</option>
        )}
      </select>
    </div>
  );
};

export default BrandList;
