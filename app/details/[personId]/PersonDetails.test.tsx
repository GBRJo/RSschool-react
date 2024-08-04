import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PersonDetails from './page';
import { useGetPersonByIdQuery } from '../../api/hello';
import { Person } from '../../../src/components/card/ICardProps';

// Mock useGetPersonByIdQuery
vi.mock('../../api/hello', () => ({
  useGetPersonByIdQuery: vi.fn(),
}));

describe('PersonDetails', () => {
  const mockPerson: Person = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    eye_color: 'blue',
    gender: 'male',
    hair_color: 'blond',
    height: '172',
    mass: '77',
    skin_color: 'fair',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/'],
    species: [],
    starships: ['https://swapi.dev/api/starships/12/'],
    vehicles: ['https://swapi.dev/api/vehicles/14/'],
    url: 'https://swapi.dev/api/people/1/',
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
  };

  it('displays loading spinner when data is loading', () => {
    (useGetPersonByIdQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<PersonDetails personId="1" onClose={vi.fn()} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    (useGetPersonByIdQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
      error: true,
      isLoading: false,
    });

    render(<PersonDetails personId="1" onClose={vi.fn()} />);

    expect(screen.getByText('Something went wrong...')).toBeInTheDocument();
  });

  it('displays person details when data is available', () => {
    (useGetPersonByIdQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: mockPerson,
      error: null,
      isLoading: false,
    });

    render(<PersonDetails personId="1" onClose={vi.fn()} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    // Add more expectations based on DetailedCard content
  });

  it('displays message when no person ID is provided', () => {
    render(<PersonDetails personId="" onClose={vi.fn()} />);

    expect(screen.getByText('No person ID provided.')).toBeInTheDocument();
  });

  it('displays message when no person details are available', () => {
    (useGetPersonByIdQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
      error: null,
      isLoading: false,
    });

    render(<PersonDetails personId="1" onClose={vi.fn()} />);

    expect(
      screen.getByText('No person details available.'),
    ).toBeInTheDocument();
  });
});
