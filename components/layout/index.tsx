import React, { FC } from 'react';
import styles from './layout.module.css';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>SnakeVersus</h1>
      {children}
    </div>
  );
};

export default Layout;
