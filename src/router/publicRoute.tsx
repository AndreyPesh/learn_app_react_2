import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Links } from '../types/enum';

interface PublicRouteProps {
  children: JSX.Element;
}

const publicRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const isAuth = useAuth();
  if (isAuth) {
    return <Navigate to={Links.main} replace />;
  }
  return children;
};

export default publicRoute;
