import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { api } from '@services/fetch/api';
import selectedPeopleReducer from './selectedPeopleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedPeople: selectedPeopleReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
