import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICurrenciesDto, TCurrenciesArray } from 'types/types';

export const currencyApi = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_ENDPOINT }),

  endpoints: (builder) => ({
    getCurrencies: builder.query<TCurrenciesArray, void>({
      query: () => `/`,
      transformResponse: (response: ICurrenciesDto) =>
        response.data.map((currency) => ({
          ...currency,
        })),
    }),
  }),
});

export const { useGetCurrenciesQuery } = currencyApi;
