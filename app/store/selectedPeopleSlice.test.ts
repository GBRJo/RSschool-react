import { describe, it, expect } from 'vitest';
import selectedPeopleReducer, {
  togglePersonSelection,
  clearSelection,
  SelectedPeopleState,
} from './selectedPeopleSlice';
import { Person } from '@components/card/ICardProps';

describe('selectedPeopleSlice', () => {
  const initialState: SelectedPeopleState = {
    selectedPeople: [],
    activePersonId: null,
  };

  const mockPerson: Person = {
    name: 'John Doe',
    birth_year: '20BBY',
    eye_color: 'blue',
    gender: 'male',
    hair_color: 'brown',
    height: '180',
    mass: '80',
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

  it('should handle initial state', () => {
    expect(selectedPeopleReducer(undefined, { type: 'unknown' })).toEqual(
      initialState,
    );
  });

  it('should handle togglePersonSelection (add)', () => {
    const actual = selectedPeopleReducer(
      initialState,
      togglePersonSelection(mockPerson),
    );
    expect(actual.selectedPeople).toHaveLength(1);
    expect(actual.selectedPeople[0]).toEqual(mockPerson);
  });

  it('should handle togglePersonSelection (remove)', () => {
    const stateWithPerson: SelectedPeopleState = {
      selectedPeople: [mockPerson],
      activePersonId: null,
    };

    const actual = selectedPeopleReducer(
      stateWithPerson,
      togglePersonSelection(mockPerson),
    );
    expect(actual.selectedPeople).toHaveLength(0);
  });

  it('should handle clearSelection', () => {
    const stateWithPeople: SelectedPeopleState = {
      selectedPeople: [mockPerson],
      activePersonId: null,
    };

    const actual = selectedPeopleReducer(stateWithPeople, clearSelection());
    expect(actual.selectedPeople).toHaveLength(0);
  });
});
