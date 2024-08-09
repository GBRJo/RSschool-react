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
    getPersonById: builder.query<Person, string>({
      query: (id) => `people/${id}/`,
    }),
  }),
});

type UseGetPeopleQuery = typeof api.endpoints.getPeople.useQuery;

type UseGetPersonByIdQuery = typeof api.endpoints.getPersonById.useQuery;

export const useGetPeopleQuery: UseGetPeopleQuery =
  api.endpoints.getPeople.useQuery;

export const useGetPersonByIdQuery: UseGetPersonByIdQuery =
  api.endpoints.getPersonById.useQuery;
