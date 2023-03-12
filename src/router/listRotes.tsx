import Admin from '../pages/Admin';
import UpdateSmartphone from '../pages/admin/UpdateSmartphone';
import Authorization from '../pages/Authorization';
import Computers from '../pages/Computers';
import Furniture from '../pages/Furniture';
import Refrigerators from '../pages/Refrigerators';
import Smartphone from '../pages/Smartphone';
import Smartphones from '../pages/Smartphones';
import User from '../pages/User';
import { AuthPath, Links } from '../types/enum';
import { ID_SMARTPHONE_PARAM } from '../utils/constants';
import { createRoutePage } from '../utils/functions';
import { loadData } from '../utils/loader';
import ProtectedRoute from './protectedRoute';
import PublicRoute from './publicRoute';

export const listRoutes = [
  {
    mainNav: true,
    path: Links.smartphones,
    name: 'Smartphone',
    element: <Smartphones />,
  },
  {
    mainNav: false,
    path: createRoutePage(Links.smartphones, ID_SMARTPHONE_PARAM),
    element: <Smartphone />,
  },
  {
    mainNav: true,
    path: Links.computers,
    name: 'Computers',
    element: <Computers />,
    // loader: loadData,
  },
  {
    mainNav: true,
    path: Links.refrigerators,
    name: 'Refrigerators',
    element: <Refrigerators />,
    loader: loadData,
  },
  {
    mainNav: true,
    path: Links.furniture,
    name: 'Furniture',
    element: <Furniture />,
    loader: loadData,
  },
  {
    mainNav: false,
    path: AuthPath.login,
    element: (
      <PublicRoute>
        <Authorization />
      </PublicRoute>
    ),
  },
  {
    mainNav: false,
    path: AuthPath.sign,
    element: (
      <PublicRoute>
        <Authorization />
      </PublicRoute>
    ),
  },
  {
    mainNav: false,
    path: Links.user,
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
  {
    mainNav: true,
    name: 'Admin',
    path: Links.admin,
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
  {
    mainNav: false,
    path: createRoutePage(Links.admin + Links.smartphone, ID_SMARTPHONE_PARAM),
    element: (
      <ProtectedRoute>
        <UpdateSmartphone />
      </ProtectedRoute>
    ),
  },
];
