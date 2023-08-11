// menuApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://demo8823583.mockable.io/' }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => 'menu', 
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
