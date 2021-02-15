import React, { FC } from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps {
  href?: string;
  action?: () => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ href, action, label, className, disabled }: ButtonProps): JSX.Element => {
  const externalClass = className ? className : '';
  const disabledClass = disabled ? `bit-border-disabled ${styles.disabled}` : '';
  const btnClass = `${styles.btn} bit-border ${externalClass} ${disabledClass}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={btnClass} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </Link>
    );
  }

  if (action) {
    return (
      <button className={btnClass} onClick={action}>
        {label}
      </button>
    );
  }

  return <></>;
};

export default Button;
