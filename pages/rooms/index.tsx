import React, { FC } from 'react';
import Button from 'components/button';
import Layout from 'components/layout';
import Input from 'components/input';
import styles from 'styles/room-join.module.css';

const RoomJoin: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Input className={styles.input} placeholder="Your nickname" />
        <div className={`bit-border ${styles.rooms}`}>
          <ul>
            <li></li>
          </ul>
        </div>
        <Input className={styles.input} placeholder="Room code" />
        <Button className={styles.button} action={() => false} label="Join" disabled={true} />
      </div>
    </Layout>
  );
};

export default RoomJoin;
