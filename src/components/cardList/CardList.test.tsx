import React, { act, ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import { CardList } from './CardList';
import selectedPeopleReducer from '../../store/selectedPeopleSlice';
import activeCardReducer, { setActiveCard } from '../../store/activeCardSlice';
import { api } from '../../services/fetch/api';
import { RootState } from '@store/store';
import { Person } from '@components/card/ICardProps';
import { ThemeProvider } from '../../hooks/ThemeContext';

// Mock data
const mockResults: Person[] = [
  {
    name: 'Person 1',
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
  },
  {
    name: 'Person 2',
    birth_year: '112BBY',
    eye_color: 'yellow',
    gender: 'n/a',
    hair_color: 'n/a',
    height: '167',
    mass: '75',
    skin_color: 'white, blue',
    homeworld: 'https://swapi.dev/api/planets/8/',
    films: ['https://swapi.dev/api/films/1/'],
    species: ['https://swapi.dev/api/species/2/'],
    starships: [],
    vehicles: [],
    url: 'https://swapi.dev/api/people/2/',
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
  },
];

const mockOnResultClick = vi.fn();

interface WrapperProps {
  children: ReactNode;
}

const renderWithProviders = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      activeCard: activeCardReducer,
      selectedPeople: selectedPeopleReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

  const Wrapper: React.FC<WrapperProps> = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );

  return {
    ...render(ui, { wrapper: Wrapper }),
    store,
  };
};

describe('CardList component', () => {
  it('renders the list of cards', () => {
    renderWithProviders(
      <CardList results={mockResults} onResultClick={mockOnResultClick} />,
    );

    expect(screen.getByText('Person 1')).toBeInTheDocument();
    expect(screen.getByText('Person 2')).toBeInTheDocument();
  });

  it('handles card click and calls onResultClick with the correct id', () => {
    renderWithProviders(
      <CardList results={mockResults} onResultClick={mockOnResultClick} />,
    );

    const card = screen.getByText('Person 1');
    fireEvent.click(card);

    expect(mockOnResultClick).toHaveBeenCalledWith('1');
  });

  it('sets the active card when clicked', () => {
    const { store } = renderWithProviders(
      <CardList results={mockResults} onResultClick={mockOnResultClick} />,
    );

    const card = screen.getByText('Person 1');
    fireEvent.click(card);

    const state: RootState = store.getState();
    expect(state.activeCard.activeCardId).toBe('1');
  });

  it('renders the active card with isActive set to true', () => {
    const { store } = renderWithProviders(
      <CardList results={mockResults} onResultClick={mockOnResultClick} />,
    );

    act(() => {
      store.dispatch(setActiveCard('1'));
    });

    const card = screen.getByText('Person 1');
    expect(card.parentElement).toHaveClass('active');
  });
});
