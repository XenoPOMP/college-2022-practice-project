import React, { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={() => {
        switch (type) {
          case 'link': {
            console.log('Type is link');
            break;
          }
          case 'callback': {
            console.log('Type is callback');
            break;
          }
        }
      }}
    >
      {children}{' '}
      {(type === 'callback' && '(callback)') || (type === 'link' && '(link)')}
    </button>
  );
};

export default Button;
