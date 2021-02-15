import React, { FC } from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps {
  href?: string;
  action?: () => void;
  label: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ href, action, label, className }: ButtonProps): JSX.Element => {
  const externalClass = className ? className : '';
  const btnClass = `${styles.btn} bit-border ${externalClass}`;

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
