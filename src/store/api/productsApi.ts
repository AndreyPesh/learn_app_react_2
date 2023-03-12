import { createApi } from '@reduxjs/toolkit/dist/query/react';
import customFetchBase from './customFetchBase/customFetchBase';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: customFetchBase,
  tagTypes: ['Phones'],
  endpoints: (builder) => ({
    getPhones: builder.query<null, null>({
      query() {
        return {
          url: 'products/phones',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useGetPhonesQuery } = productsApi;
