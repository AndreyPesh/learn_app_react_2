export interface Data {
  id: number;
  name: string;
}

export const data: Data[] = [
  { id: 1, name: 'Andrei' },
  { id: 2, name: 'Fillip' },
  { id: 3, name: 'Sasha' },
];

export const loadData = async (): Promise<Data[]> => {
  console.log('send request');

  const response = await new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
  return response as Data[];
};
