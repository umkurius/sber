import { CurrencySelect } from '../../../../modules/CurrencySelect/index';
import s from './Title.module.css';

export const Title = () => {
  return (
    <div className={s.wrap}>
      <div className={s.title}>
        <h1 className={s.header}>CAT</h1>
        <p className={s.text}>currencies academic terms</p>
      </div>
      <CurrencySelect />
    </div>
  );
};
