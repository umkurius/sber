import { useGetCurrenciesQuery } from '../../../../api/api';
import s from './Title.module.css';

export const Title = () => {
  const { data } = useGetCurrenciesQuery();
  console.log(data);
  return (
    <div className={s.container}>
      <h1 className={s.title}>CAT</h1>
      <p className={s.text}>currencies academic terms</p>
    </div>
  );
};
