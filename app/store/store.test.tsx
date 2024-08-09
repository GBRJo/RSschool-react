import { describe, it, expect } from 'vitest';
import { store, RootState } from './store';

describe('Redux Store', () => {
  it('should have the correct initial state', () => {
    const initialState: RootState = store.getState();

    expect(initialState.activeCard).toEqual({
      activeCardId: null,
    });

    expect(initialState.selectedPeople).toEqual({
      selectedPeople: [],
      activePersonId: null,
    });

    expect(initialState.api).toBeDefined();
  });
});
