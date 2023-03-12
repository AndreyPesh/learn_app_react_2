import { useState } from 'react';
import Loader from '../components/ui/Loader';
import useCheckAdmin from '../hooks/useCheckAdmin';
import { listProducts } from '../utils/admin/listProducts';

const Admin = () => {
  const [load, setLoad] = useState(true);
  const [translate, setTranslate] = useState(0);

  useCheckAdmin(setLoad);

  if (load) {
    return <Loader />;
  }

  const translateHandler = (value: number) => {
    setTranslate(value);
  };

  return (
    <div className="container">
      <h2>Admin page</h2>
      <ul>
        {listProducts.map((product, index) => (
          <li key={index}>
            <button onClick={() => translateHandler(index * 100)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <div className="list-products">
        <div className="products" style={{ translate: `-${translate}%` }}>
          {listProducts.map(products => products.component)}
        </div>
      </div>
    </div>
  );
};

export default Admin;
