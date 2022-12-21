import { FC, useRef } from 'react';
import { FormInputProps } from './FormInput.props';
import cn from 'classnames';
import styles from './FormInput.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

const FormInput: FC<FormInputProps> = ({
  label,
  placeholder,
  useState,
  type,
}) => {
  const textAreaRef = useRef(null);

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.label)}>{label}</div>

      {(type === 'text' || type === 'email') && (
        <input
          required
          type={type}
          placeholder={placeholder}
          value={useState.state}
          onChange={(e) => useState.setState(e.target.value)}
        />
      )}

      {type === 'textarea' && (
        <TextareaAutosize
          ref={textAreaRef}
          value={useState.state}
          onChange={(e) => {
            useState.setState(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default FormInput;
