import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/header/Header.tsx';

const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
