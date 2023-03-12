import { createApi } from '@reduxjs/toolkit/query/react';
import { BrandData } from '../../../types/interface';
import customFetchBase from '../customFetchBase/customFetchBase';

export const smartphoneBrandApi = createApi({
  reducerPath: 'smartphoneBrandApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getBrands: builder.query<BrandData[], null>({
      query() {
        return {
          url: '/smartphones/brand-getall',
          method: 'GET',
          credentials: 'include',
        };
      },
    }),
    addBrand: builder.mutation<void, {brand: string}>({
      query(brand) {
        return {
          url: '/smartphones/brand-create',
          method: 'POST',
          body: brand,
          credentials: 'include'
        }
      }
    })
  }),
});

export const { useGetBrandsQuery, useAddBrandMutation } = smartphoneBrandApi;
