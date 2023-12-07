import { useAppSelector } from '../../hooks/hooks';
import { getCurrencyName } from '../../modules/CurrencySelect/store/currency.selector';
import s from './Footer.module.css';

export const Footer = () => {
  const currencyName = useAppSelector(getCurrencyName);

  return (
    <footer className={s.footer}>
      <p className={s.text}>{currencyName}</p>
    </footer>
  );
};
