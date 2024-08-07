import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DetailedCard } from './DetailedCard';
import { Person } from '../ICardProps';

describe('DetailedCard component', () => {
  const person: Person = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    eye_color: 'blue',
    gender: 'male',
    hair_color: 'blond',
    height: '172',
    mass: '77',
    skin_color: 'fair',
    homeworld: 'Tatooine',
    films: ['A New Hope'],
    species: ['Human'],
    starships: ['X-wing'],
    vehicles: ['Snowspeeder'],
    url: 'https://swapi.dev/api/people/1/',
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
  };

  it('renders without crashing', () => {
    render(<DetailedCard person={person} />);
  });

  it('displays the correct name', () => {
    render(<DetailedCard person={person} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('displays all the person details correctly', () => {
    render(<DetailedCard person={person} />);

    expect(screen.getByText('Height: 172 cm')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77 kg')).toBeInTheDocument();
    expect(screen.getByText('Hair Color: blond')).toBeInTheDocument();
    expect(screen.getByText('Skin Color: fair')).toBeInTheDocument();
    expect(screen.getByText('Eye Color: blue')).toBeInTheDocument();
    expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });

  it('forms the correct image URL', () => {
    render(<DetailedCard person={person} />);
    const imageUrl =
      'https://starwars-visualguide.com/assets/img/characters/1.jpg';
    const image = screen.getByAltText('Luke Skywalker');
    expect(image).toHaveAttribute('src', imageUrl);
  });
});
