import { configureStore } from '@reduxjs/toolkit';
import selectedPeopleReducer from './selectedPeopleSlice';
import activeCardReducer from './activeCardSlice';
import { api } from '../../app-next/api/hello';

export const store = configureStore({
  reducer: {
    activeCard: activeCardReducer,
    selectedPeople: selectedPeopleReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
