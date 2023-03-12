import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/routes';
import Loader from './components/ui/Loader';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Provider>
  </React.StrictMode>
);
