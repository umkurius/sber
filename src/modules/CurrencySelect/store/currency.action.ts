import { createAction } from '@reduxjs/toolkit';

export const setCurrencyName = createAction<{ name: string }>('currency/setCurrencyName');
