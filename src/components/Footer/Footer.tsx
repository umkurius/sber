import { useAppSelector } from '../../hooks/hooks';
import { getCurrencyName } from '../../modules/CurrencySelect/store/currency.selector';
import style from './Footer.module.css';

export const Footer = () => {
  const currencyName = useAppSelector(getCurrencyName);

  return (
    <footer className={style.footer}>
      <p className={style.text}>{currencyName}</p>
    </footer>
  );
};
