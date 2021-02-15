import React, { FC } from 'react';
import Image from 'next/image';
import Button from 'components/button';
import styles from 'styles/home.module.css';

const Home: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.menu}>
        <h1>SnakeVersus</h1>
        <nav>
          <Button className={styles.option} href="/rooms/create" label="Create" />
          <Button className={styles.option} href="/rooms" label="Join" />
        </nav>
        <a
          className={styles['github-icon']}
          href="https://github.com/vini-gpereira/snake-versus-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github-icon.png" height={60} width={60} />
        </a>
      </main>
    </div>
  );
};

export default Home;
