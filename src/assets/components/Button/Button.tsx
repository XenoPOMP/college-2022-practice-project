import React, { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={cn(className, styles.button)}>{children}</button>;
};

export default Button;
