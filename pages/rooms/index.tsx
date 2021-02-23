import React, { ChangeEvent, FC, useState } from 'react';
import Button from 'components/button';
import Layout from 'components/layout';
import Input from 'components/input';
import styles from 'styles/room-join.module.css';

const RoomJoin: FC = (): JSX.Element => {
  const [nickname, setNickname] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');

  return (
    <Layout>
      <div className={styles.container}>
        <Input
          className={styles.input}
          placeholder="Your nickname"
          value={nickname}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
        />
        <div className={`bit-border ${styles.rooms}`}>
          <ul>
            <li></li>
          </ul>
        </div>
        <Input
          className={styles.input}
          placeholder="Room code"
          value={roomId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value)}
        />
        <Button className={styles.button} action={() => false} label="Join" disabled={!nickname || !roomId} />
      </div>
    </Layout>
  );
};

export default RoomJoin;
