import React, { FC } from 'react';
import { InputProps } from '../index';
import styles from './checkbox.module.css';

export interface CheckboxInputProps extends InputProps {
  checked?: boolean;
}

const CheckboxInput: FC<CheckboxInputProps> = (props): JSX.Element => {
  const { id, name, checked, onChange, className } = props;

  return (
    <div className={`bit-border ${styles.wrapper} ${className}`}>
      <input type="checkbox" id={id} name={name} checked={checked} onChange={onChange} className={styles.input} />
    </div>
  );
};

export default CheckboxInput;
