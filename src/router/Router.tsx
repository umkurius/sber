import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage/components/ErrorPage/ErrorPage';
import { MainPage } from '../pages/MainPage/components/MainPage/MainPage';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/404' element={<ErrorPage />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  );
};
