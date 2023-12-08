import KittenImage from '../../assets/img/Kitten.png';
import { Title } from '../../pages/MainPage/components/Title/Title';

import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <Title />
      <img className={style.img} src={KittenImage} alt='cat' />
    </header>
  );
};
