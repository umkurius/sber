export interface ICurrenciesDto {
  data: TCurrencies[];
}

export type TCurrencies = {
  id: string;
  name: string;
  min_size: string;
};

export type TCurrenciesArray = TCurrencies[];

export type TOptions = {
  value: string;
  label: string;
};
