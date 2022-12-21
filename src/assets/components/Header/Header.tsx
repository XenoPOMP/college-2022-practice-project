import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: FC<HeaderProps> = () => {
  return (
    <header className={cn(styles.appHeader)}>
      <div className={cn(styles.container)}>
        <Link to={'/'} className={cn(styles.logo, styles.cell)}>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            ЯСК
          </motion.span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
