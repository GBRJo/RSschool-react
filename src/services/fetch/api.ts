import { Person } from '@components/card/ICardProps';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeople: builder.query<
      { results: Person[]; count: number },
      { search: string; page: number }
    >({
      query: ({ search, page }) =>
        `people/?page=${page}&search=${encodeURIComponent(search)}`,
    }),
  }),
});

// Определяем тип для useGetPeopleQuery
type UseGetPeopleQuery = typeof api.endpoints.getPeople.useQuery;

// Экспортируем хук с явным указанием типа
export const useGetPeopleQuery: UseGetPeopleQuery =
  api.endpoints.getPeople.useQuery;
