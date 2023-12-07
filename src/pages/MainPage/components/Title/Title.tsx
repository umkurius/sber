import { CurrencySelect } from '../../../../modules/CurrencySelect/index';
import style from './Title.module.css';

export const Title = () => {
  return (
    <div className={style.wrap}>
      <div className={style.title}>
        <h1 className={style.header}>CAT</h1>
        <p className={style.text}>currencies academic terms</p>
      </div>
      <CurrencySelect />
    </div>
  );
};
