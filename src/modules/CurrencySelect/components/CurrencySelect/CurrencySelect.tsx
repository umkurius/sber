import { useEffect } from 'react';
import Select, { OnChangeValue } from 'react-select';
import { useAppDispatch } from '../../../../hooks/hooks';
import { useGetCurrenciesQuery } from '../../api/api';
import { setCurrencyName } from '../../store/currency.action';

import { TOptions } from 'types/types';
import s from './CurrencySelect.module.css';

export const CurrencySelect = () => {
  const { data, isLoading } = useGetCurrenciesQuery();
  const dispatch = useAppDispatch();

  const defaultValue = data ? data[0].name : '';

  const options = data
    ? data.map((el) => {
        return { value: el.name, label: el.id };
      })
    : [];

  useEffect(() => {
    dispatch(setCurrencyName({ name: defaultValue }));
  }, [defaultValue]);

  const handleChange = (newValue: OnChangeValue<TOptions, boolean>) => {
    if (newValue) {
      const selectedValue = (newValue as { value: string; label: string }).value;
      dispatch(setCurrencyName({ name: selectedValue }));
    }
  };

  console.log('render');
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && (
        <Select
          styles={{
            option: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: state.isFocused ? '#F0EFEF' : 'white',
              color: '#000000',
            }),
            control: (baseStyles) => ({
              ...baseStyles,
              borderRadius: '10px',
            }),
          }}
          className={s.select}
          defaultValue={options[0]}
          options={options}
          onChange={handleChange}
          maxMenuHeight={160}
        />
      )}
    </>
  );
};
