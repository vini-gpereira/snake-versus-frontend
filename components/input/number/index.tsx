import React, { FC } from 'react';
import { InputProps } from '../index';
import styles from './number.module.css';

export interface NumberInputProps extends InputProps {
  min?: string;
  max?: string;
}

const NumberInput: FC<NumberInputProps> = (props): JSX.Element => {
  const { id, name, min, max, value, onChange, className } = props;

  return (
    <div className={`bit-border ${styles.wrapper} ${className}`}>
      <button></button>
      <input
        type="number"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <button></button>
    </div>
  );
};

export default NumberInput;
