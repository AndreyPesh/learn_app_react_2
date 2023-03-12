import { useLoaderData } from 'react-router-dom';
import { Data } from '../utils/loader';

const Main = (): JSX.Element => {
  const data = useLoaderData() as Data[];

  return <div>{data.map((data) => `id ${data.id} name: ${data.name} `)}</div>;
};

export default Main;
