import React, { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({ children, className, link, callback }) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={() => {
        // Invoke callback
        callback && callback();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
