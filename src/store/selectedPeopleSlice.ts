import { Person } from '@components/card/ICardProps';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SelectedPeopleState {
  selectedPeople: Person[];
  activePersonId: string | null;
}

const initialState: SelectedPeopleState = {
  selectedPeople: [],
  activePersonId: null,
};

const selectedPeopleSlice = createSlice({
  name: 'selectedPeople',
  initialState,
  reducers: {
    togglePersonSelection(state, action: PayloadAction<Person>) {
      const person = action.payload;
      const index = state.selectedPeople.findIndex((p) => p.url === person.url);
      if (index >= 0) {
        state.selectedPeople.splice(index, 1);
      } else {
        state.selectedPeople.push(person);
      }
    },
    clearSelection(state) {
      state.selectedPeople = [];
    },
  },
});

export const { togglePersonSelection, clearSelection } =
  selectedPeopleSlice.actions;

// Обычный селектор для получения выбранных персонажей
const getSelectedPeople = (state: RootState) =>
  state.selectedPeople.selectedPeople;

// Мемоизированный селектор для получения URL-ов выбранных персонажей
export const getSelectedPeopleUrls = createSelector(
  [getSelectedPeople],
  (selectedPeople: Person[]) => selectedPeople.map((p) => p.url),
);
export type { SelectedPeopleState };
export default selectedPeopleSlice.reducer;
