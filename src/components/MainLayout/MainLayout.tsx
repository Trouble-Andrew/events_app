import React, { PropsWithChildren } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
