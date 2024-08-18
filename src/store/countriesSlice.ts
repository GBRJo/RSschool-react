import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountriesState {
  countries: string[];
}

const initialState: CountriesState = {
  countries: [
    'United States',
    'Canada',
    'Mexico',
    'United Kingdom',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Australia',
    'Japan',
    'China',
    'India',
    'Brazil',
    'South Africa',
    'Russia',
  ],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export type { CountriesState };
export default countriesSlice.reducer;
