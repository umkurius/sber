import { useEffect } from 'react';
import Select, { OnChangeValue } from 'react-select';
import { TOptions } from 'types/types';
import { useAppDispatch } from '../../../../hooks/hooks';
import { useGetCurrenciesQuery } from '../../api/api';
import { setCurrencyName } from '../../store/currency.action';
import style from './CurrencySelect.module.css';

export const CurrencySelect = () => {
  const { data, isLoading } = useGetCurrenciesQuery();
  const dispatch = useAppDispatch();

  const defaultValue = data ? data[0].name : '';

  const options = data
    ? data.map((item) => {
        return { value: item.name, label: item.id };
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

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && (
        <Select
          className={style.select}
          classNamePrefix='custom'
          defaultValue={options[0]}
          options={options}
          onChange={handleChange}
          maxMenuHeight={160}
          isSearchable={false}
        />
      )}
    </>
  );
};
