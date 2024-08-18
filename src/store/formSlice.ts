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

const initialState: FormState = {
  name: '',
  age: 18,
  email: '',
  password: '',
  confirmPassword: '',
  image: null,
  termsAccepted: false,
  gender: null,
  country: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword = action.payload;
    },
    setImage(state, action: PayloadAction<string | null>) {
      state.image = action.payload;
    },
    setTermsAccepted(state, action: PayloadAction<boolean>) {
      state.termsAccepted = action.payload;
    },
    setGender(state, action: PayloadAction<'male' | 'female' | null>) {
      state.gender = action.payload;
    },
    setCountry(state, action: PayloadAction<string | null>) {
      state.country = action.payload;
    },
  },
});

export const {
  setName,
  setAge,
  setEmail,
  setPassword,
  setConfirmPassword,
  setImage,
  setTermsAccepted,
  setGender,
  setCountry,
} = formSlice.actions;

export type { FormState };
export default formSlice.reducer;
