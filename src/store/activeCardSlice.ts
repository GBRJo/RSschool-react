// activeCardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveCardState {
  activeCardId: string | null;
}

const initialState: ActiveCardState = {
  activeCardId: null,
};

const activeCardSlice = createSlice({
  name: 'activeCard',
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<string | null>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { setActiveCard } = activeCardSlice.actions;
export type { ActiveCardState };
export default activeCardSlice.reducer;
