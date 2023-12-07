import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCurrencies } from 'types/types';

type TInitial = Pick<TCurrencies, 'name'>;

const initialState: TInitial = {
  name: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyName(state, action: PayloadAction<TInitial>) {
      const { name } = action.payload;
      state.name = name;
    },
  },
});
