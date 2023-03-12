import Loader from '../components/ui/Loader';
import { useGetPhonesQuery } from '../store/api/productsApi';

const Computers = (): JSX.Element => {
  const {data = [], error, isLoading} = useGetPhonesQuery(null, { refetchOnMountOrArgChange: true });
  if(isLoading) {
    return <Loader />
  }
  return <div>
    <h1>Computers</h1>
    </div>;
};

export default Computers;
