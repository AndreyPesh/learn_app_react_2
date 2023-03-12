import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AuthPath } from '../types/enum';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const isAuth = useAuth();
  if (!isAuth) {
    return <Navigate to={AuthPath.login} replace />;
  }
  return children;
};

export default ProtectedRoute;
