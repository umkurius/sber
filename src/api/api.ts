import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCurrencies } from 'types/types';

export const currencyApi = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_ENDPOINT }),

  endpoints: (builder) => ({
    getCurrencies: builder.query<TCurrencies, void>({
      query: () => `/`,
    }),
  }),
});

export const { useGetCurrenciesQuery } = currencyApi;
