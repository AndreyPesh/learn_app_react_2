import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginFormValues, SignFormValues } from '../../types/interface';
import { logout } from '../slice/userSlice';
import customFetchBase from './customFetchBase/customFetchBase';
import { GenericResponse } from './types';
import { userApi } from './userApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation<GenericResponse, SignFormValues>({
      query(data) {
        return {
          url: '/auth/register',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            userApi.endpoints.getMe.initiate(null, { subscribe: false, forceRefetch: true })
          );
        } catch (error) {}
      },
    }),
    loginUser: builder.mutation<{ access_token: string; status: string }, LoginFormValues>({
      query(data) {
        return {
          url: '/auth/login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            userApi.endpoints.getMe.initiate(null, { subscribe: false, forceRefetch: true })
          );
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: '/auth/logout',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi;
