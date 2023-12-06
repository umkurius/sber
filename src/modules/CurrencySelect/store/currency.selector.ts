import { RootState } from 'store';

export const getCurrencyName = (state: RootState): string => state.currency.name;
