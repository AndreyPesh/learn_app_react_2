import { useNavigate } from 'react-router-dom';
import { Links } from '../../../types/enum';
import { SmartphoneData } from '../../../types/interface';
import { BASE_URL, DEFAULT_IMAGE_NAME } from '../../../utils/constants';
import { createRoutePage } from '../../../utils/functions';

interface SmartphoneCartProps {
  data: SmartphoneData;
}

const SmartphoneCart = ({ data }: SmartphoneCartProps) => {
  const navigate = useNavigate();
  const { id, brand, images } = data;
  const nameImage = images && images.length > 0 ? images[0].name : DEFAULT_IMAGE_NAME;

  const openPageSmartphoneHandler = (id: string) => {
    const routePageSmartphone = createRoutePage(Links.smartphones, id);
    navigate(routePageSmartphone);
  };

  return (
    <div className="products-list__item" onClick={() => openPageSmartphoneHandler(id)}>
      <div className="product-cart">
        <h3 className="product-cart__title">{brand.brand}</h3>
        <div className="product-cart__content">
          <img
            className="product-cart__image-preview"
            src={BASE_URL + '/' + nameImage}
            alt={data.id + '_smartphone'}
          />
          <button className="button button_cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SmartphoneCart;
