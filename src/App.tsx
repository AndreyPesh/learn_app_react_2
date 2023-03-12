import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/ui/Loader';
import { ToastContainer } from 'react-toastify';
import { DELAY_TIME_TOAST } from './utils/constants';
import { NavigationState } from './types/enum';

const App = (): JSX.Element => {
  const navigation = useNavigation();
  const isLoading = navigation.state === NavigationState.loading;
  return (
    <>
      <Header />
      {isLoading ? <Loader /> : <Outlet />}
      <ToastContainer autoClose={DELAY_TIME_TOAST} />
    </>
  );
};

export default App;
