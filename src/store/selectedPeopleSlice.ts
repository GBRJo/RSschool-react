import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedPeopleState {
  selectedIds: string[];
}

const initialState: SelectedPeopleState = {
  selectedIds: [],
};

const selectedPeopleSlice = createSlice({
  name: 'selectedPeople',
  initialState,
  reducers: {
    togglePersonSelection(state, action: PayloadAction<string>) {
      const personId = action.payload;
      if (state.selectedIds.includes(personId)) {
        state.selectedIds = state.selectedIds.filter((id) => id !== personId);
      } else {
        state.selectedIds.push(personId);
      }
    },
    clearSelection(state) {
      state.selectedIds = [];
    },
  },
});

export const { togglePersonSelection, clearSelection } =
  selectedPeopleSlice.actions;
export type { SelectedPeopleState };
export default selectedPeopleSlice.reducer;
