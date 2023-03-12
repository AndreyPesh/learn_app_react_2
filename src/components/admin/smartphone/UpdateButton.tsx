import { useNavigate } from 'react-router-dom';
import { Links } from '../../../types/enum';
import { createRoutePage } from '../../../utils/functions';

const UpdateButton = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const updateProduct = (id: string) => {
    const route = createRoutePage(Links.admin + Links.smartphone, id);
    navigate(route);
  };

  return (
    <button className="button button_remove" onClick={() => updateProduct(id)}>
      Update
    </button>
  );
};

export default UpdateButton;
