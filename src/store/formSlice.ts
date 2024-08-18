// src/store/formSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  image: string | null;
  termsAccepted: boolean | null;
  gender: 'male' | 'female' | null;
  country: string | null;
}

interface FormSliceState {
  data: FormState[];
}

const initialState: FormSliceState = {
  data: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<FormState>) {
      state.data.push(action.payload); // Добавляем новые данные
    },
    updateFormData(
      state,
      action: PayloadAction<{ index: number; newData: Partial<FormState> }>,
    ) {
      const { index, newData } = action.payload;
      if (state.data[index]) {
        state.data[index] = { ...state.data[index], ...newData }; // Обновляем данные по индексу
      }
    },
  },
});

export const { addFormData, updateFormData } = formSlice.actions;

export type { FormState };
export default formSlice.reducer;
