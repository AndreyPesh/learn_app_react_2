import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import { useToasty } from '../../../../hooks/useToasty';
import { useGetBrandsQuery } from '../../../../store/api/admin/smartphoneBrandApi';
import { SmartphoneDescription } from '../../../../types/interface';

interface BrandListProps {
  selectBrand: Dispatch<SetStateAction<SmartphoneDescription>>;
}

const BrandList = ({ selectBrand }: BrandListProps) => {
  const { data, isError } = useGetBrandsQuery(null);

  useToasty({ isError, messageError: 'Error load brand' });

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    selectBrand((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    data && data.length > 0 && selectBrand((prevData) => ({...prevData, brand: data[0].brand}))
  }, [data])

  return (
    <div className='form__field'>
      <label htmlFor="list-brand">Brand:</label>
      <select className='form__input' name="brand" id="list-brand" onChange={selectHandler}>
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
