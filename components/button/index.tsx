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
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.btn + ' ' + className} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </Link>
    );
  }

  if (action) {
    return (
      <button className={styles.btn + ' ' + className} onClick={action}>
        {label}
      </button>
    );
  }

  return <></>;
};

export default Button;
