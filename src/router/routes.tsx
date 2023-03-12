import { RouteObject } from 'react-router-dom';
import App from '../App';
import Error from '../pages/Error';
import Main from '../pages/Main';
import { Links } from '../types/enum';
import { loadData } from '../utils/loader';
import { listRoutes } from './listRotes';

export const routes: RouteObject[] = [
  {
    path: Links.main,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
        loader: loadData,
      },
      ...listRoutes,
    ],
  },
];
