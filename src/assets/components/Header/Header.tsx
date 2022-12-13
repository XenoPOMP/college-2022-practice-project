import React, { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const Header: FC<HeaderProps> = () => {
  return (
    <header className={cn(styles.appHeader)}>
      <div className={cn(styles.container)}>
        <Link to={'/'} className={cn(styles.logo, styles.cell)}>
          ЯСК
        </Link>
      </div>
    </header>
  );
};

export default Header;
