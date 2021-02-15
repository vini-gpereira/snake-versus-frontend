import React, { FC } from 'react';
import styles from './input.module.css';

interface InputProps {
  className?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ className, placeholder }: InputProps): JSX.Element => {
  return (
    <div className={`bit-border ${styles.wrapper} ${className}`}>
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
