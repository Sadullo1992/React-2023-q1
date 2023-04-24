import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPhoto } from '../types/photo.model';
import { SearchResponse } from '../types/search-response.model';

interface IQuery {
  query: string;
  sortBy: string;
  page: number;
}

export interface CustomError {
  data?: {
    errors: string[];
  };
  status: number | string;
  error?: string;
}

const ACCESS_KEY = 'PSIVIHcV7KeBrf5S34ayiSiPeoKDJ2Cwg6kKDmg2Nyc';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com' }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    CustomError
  >,
  endpoints: (builder) => ({
    getPhotos: builder.query<SearchResponse, IQuery>({
      query: (arg) => {
        return {
          url: '/search/photos',
          params: { ...arg, order_by: arg.sortBy, client_id: ACCESS_KEY },
        };
      },
      extraOptions: undefined,
    }),
    getPhotoById: builder.query<IPhoto, string>({
      query: (id) => `/photos/${id}?client_id=${ACCESS_KEY}`,
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotoByIdQuery } = apiSlice;
