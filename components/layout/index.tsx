import React, { FC } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Link href="/">
        <a className={styles.title}>SnakeVersus</a>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
