import { Person } from '@components/card/ICardProps';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedPeopleState {
  selectedPeople: Person[];
}

const initialState: SelectedPeopleState = {
  selectedPeople: [],
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
export type { SelectedPeopleState };
export default selectedPeopleSlice.reducer;
