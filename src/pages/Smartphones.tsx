import SmartphoneCart from '../components/pagesUI/smartphone/SmartphoneCart';
import Loader from '../components/ui/Loader';
import { useToasty } from '../hooks/useToasty';
import { useGetSmartphoneListQuery } from '../store/api/admin/smartphoneApi';

const Smartphones = (): JSX.Element => {
  const { data, isLoading, isError } = useGetSmartphoneListQuery(null);
  useToasty({ isError, messageError: 'Something went wrong' });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div className="product-list">
        {data ? (
          data.map((smartphone) => <SmartphoneCart key={smartphone.id} data={smartphone} />)
        ) : (
          <h2>Error load smartphone data</h2>
        )}
        {data?.length === 0 && <h2>List smartphone is empty</h2>}
      </div>
    </div>
  );
};

export default Smartphones;
