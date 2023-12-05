import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currencyApi } from '../api/api';
import { currencySlice } from './slices/slice';

const rootReducer = combineReducers({
  currency: currencySlice.reducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
