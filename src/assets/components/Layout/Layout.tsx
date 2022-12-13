import React, { FC } from 'react';
import { LayoutProps } from './Layout.props';
import Header from '../Header/Header';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
