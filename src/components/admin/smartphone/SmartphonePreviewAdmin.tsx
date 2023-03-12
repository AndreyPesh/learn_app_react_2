import { Dispatch, SetStateAction } from 'react';
import { CheckboxHandlerParams, SmartphoneData } from '../../../types/interface';
import { filterProductsByStatus } from '../../../utils/admin/helper';
import Checkbox from '../../ui/Checkbox';
import UpdateButton from './UpdateButton';

interface SmartphonePreviewAdminProps {
  data: SmartphoneData;
  setSelectedProducts: Dispatch<SetStateAction<Array<string>>>;
}

const SmartphonePreviewAdmin = ({ data, setSelectedProducts }: SmartphonePreviewAdminProps) => {

  const toggleProductToRemove = ({ status }: CheckboxHandlerParams) => {
    setSelectedProducts((prevProducts) => {
      return filterProductsByStatus(prevProducts, data.id, status);
    });
  };

  return (
    <div className="list-product-admin__item">
      {data.brand.brand + ' ' + data.model}
      <div className="list-product-admin__actions">
        <UpdateButton id={data.id}/>
        <Checkbox checkboxHandler={toggleProductToRemove} />
      </div>
    </div>
  );
};

export default SmartphonePreviewAdmin;
