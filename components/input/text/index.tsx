import React, { FC } from 'react';
import { InputProps } from '../index';
import styles from './text.module.css';

export interface TextInputProps extends InputProps {
  placeholder?: string;
}

const TextInput: FC<TextInputProps> = (props): JSX.Element => {
  const { id, name, placeholder, value, onChange, className } = props;

  return (
    <div className={`bit-border ${styles.wrapper} ${className}`}>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;
