import { useParams } from 'react-router-dom';
import SmartphoneView from '../components/pagesUI/smartphone/SmartphoneView';
import Loader from '../components/ui/Loader';
import { useGetSmartphoneQuery } from '../store/api/admin/smartphoneApi';

const Smartphone = () => {
  const { smartphoneId } = useParams();
  const { data, isLoading } = useGetSmartphoneQuery({ id: smartphoneId! });

  if(isLoading) {
    return <Loader />
  }
  return (
    <div className="container">
      <h1>Smartphone</h1>
      {data ? <SmartphoneView data={data}/> : <h2>Error load data</h2>}
    </div>
  );
};

export default Smartphone;
