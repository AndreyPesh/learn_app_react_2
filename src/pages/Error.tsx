import Header from '../components/Header';
import { Link, useRouteError } from 'react-router-dom';

interface ErrorResponse {
  status: number;
  statusText: string;
}

const Error = (): JSX.Element => {
  const { status, statusText } = useRouteError() as ErrorResponse;

  const NotFoundPage = (
    <>
      <h1>Error</h1> {status} <b>Message:</b> {statusText} <Link to={'/'}>Return to main</Link>
    </>
  );

  const Ups = <h1>Ups!! Something went wrong</h1>;

  return (
    <div>
      <Header />
      {status ?? status === 404 ? NotFoundPage : Ups}
    </div>
  );
};

export default Error;
