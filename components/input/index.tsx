import React, { ChangeEvent, FC } from 'react';
import styles from './input.module.css';

interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ value, onChange, className, placeholder }: InputProps): JSX.Element => {
  return (
    <div className={`bit-border ${styles.wrapper} ${className}`}>
      <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
