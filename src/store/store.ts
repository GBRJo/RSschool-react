import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { api } from '@services/fetch/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer, // Добавляем API редюсер
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Добавляем API middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
