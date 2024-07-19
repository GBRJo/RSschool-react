import { Person } from '@components/card/ICardProps';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Определение API сервиса с помощью RTK Query
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
      query: (id) => `people/${id}/`, // Путь к деталям человека
    }),
  }),
});

// Определяем тип для useGetPeopleQuery
type UseGetPeopleQuery = typeof api.endpoints.getPeople.useQuery;

// Определяем тип для useGetPersonByIdQuery
type UseGetPersonByIdQuery = typeof api.endpoints.getPersonById.useQuery;

// Экспортируем хук с явным указанием типа
export const useGetPeopleQuery: UseGetPeopleQuery =
  api.endpoints.getPeople.useQuery;

// Экспортируем второй хук с явным указанием типа
export const useGetPersonByIdQuery: UseGetPersonByIdQuery =
  api.endpoints.getPersonById.useQuery;
