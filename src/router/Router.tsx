import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage/components/MainPage/MainPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/components/ErrorPage/ErrorPage'));

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </Suspense>
  );
};
