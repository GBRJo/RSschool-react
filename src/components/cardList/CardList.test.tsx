import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CardList } from './CardList';
import { ICardProps } from '@components/card/baseCard/Card';
import { Person } from '@components/card/ICardProps';
vi.mock('./Card', () => ({
  Card: ({ person, onClick, isActive }: ICardProps) => (
    <div
      data-testid="card"
      onClick={onClick}
      className={isActive ? 'active' : ''}
    >
      {person.name}
    </div>
  ),
}));

describe('CardList component', () => {
  it('renders a list of cards', () => {
    const results: Person[] = [
      {
        name: 'Person 1',
        birth_year: '2000',
        eye_color: 'blue',
        gender: 'male',
        hair_color: 'brown',
        height: '180',
        mass: '70',
        skin_color: 'light',
        homeworld: 'Earth',
        films: ['Film 1'],
        species: ['Human'],
        starships: [],
        vehicles: [],
        url: '/people/1/',
        created: '2022-01-01T00:00:00Z',
        edited: '2022-01-02T00:00:00Z',
      },
      {
        name: 'Person 2',
        birth_year: '1990',
        eye_color: 'green',
        gender: 'female',
        hair_color: 'blonde',
        height: '165',
        mass: '55',
        skin_color: 'pale',
        homeworld: 'Mars',
        films: ['Film 2'],
        species: ['Human'],
        starships: [],
        vehicles: [],
        url: '/people/2/',
        created: '2022-02-01T00:00:00Z',
        edited: '2022-02-02T00:00:00Z',
      },
    ];
    const onResultClick = vi.fn();

    render(<CardList results={results} onResultClick={onResultClick} />);

    expect(screen.getByText('Person 1')).toBeInTheDocument();
    expect(screen.getByText('Person 2')).toBeInTheDocument();
  });

  it('calls onResultClick with the correct id when a card is clicked', () => {
    const results: Person[] = [
      {
        name: 'Person 1',
        birth_year: '2000',
        eye_color: 'blue',
        gender: 'male',
        hair_color: 'brown',
        height: '180',
        mass: '70',
        skin_color: 'light',
        homeworld: 'Earth',
        films: ['Film 1'],
        species: ['Human'],
        starships: [],
        vehicles: [],
        url: '/people/1/',
        created: '2022-01-01T00:00:00Z',
        edited: '2022-01-02T00:00:00Z',
      },
    ];
    const onResultClick = vi.fn();

    render(<CardList results={results} onResultClick={onResultClick} />);

    fireEvent.click(screen.getByText('Person 1'));

    expect(onResultClick).toHaveBeenCalledWith('1');
  });

  it('sets the clicked card as active', () => {
    const results: Person[] = [
      {
        name: 'Person 1',
        birth_year: '2000',
        eye_color: 'blue',
        gender: 'male',
        hair_color: 'brown',
        height: '180',
        mass: '70',
        skin_color: 'light',
        homeworld: 'Earth',
        films: ['Film 1'],
        species: ['Human'],
        starships: [],
        vehicles: [],
        url: '/people/1/',
        created: '2022-01-01T00:00:00Z',
        edited: '2022-01-02T00:00:00Z',
      },
      {
        name: 'Person 2',
        birth_year: '1990',
        eye_color: 'green',
        gender: 'female',
        hair_color: 'blonde',
        height: '165',
        mass: '55',
        skin_color: 'pale',
        homeworld: 'Mars',
        films: ['Film 2'],
        species: ['Human'],
        starships: [],
        vehicles: [],
        url: '/people/2/',
        created: '2022-02-01T00:00:00Z',
        edited: '2022-02-02T00:00:00Z',
      },
    ];
    const onResultClick = vi.fn();

    render(<CardList results={results} onResultClick={onResultClick} />);

    fireEvent.click(screen.getByText('Person 1'));

    const cardElements = screen.getAllByTestId('card');
    expect(cardElements[0]).toHaveClass('active');
    expect(cardElements[1]).not.toHaveClass('active');
  });
});
