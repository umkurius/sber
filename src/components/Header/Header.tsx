import KittenImage from '../../assets/img/Kitten.png';
import { Title } from '../../pages/MainPage/components/Title/Title';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.container}>
      <Title />
      <img src={KittenImage} alt='cat' />
    </header>
  );
};
