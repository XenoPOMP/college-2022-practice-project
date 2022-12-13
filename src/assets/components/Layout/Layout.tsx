import React, { FC, useRef } from 'react';
import { LayoutProps } from './Layout.props';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
