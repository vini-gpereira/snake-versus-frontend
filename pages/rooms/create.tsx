import React, { FC } from 'react';
import Layout from 'components/layout';

const CreateRoom: FC = (): JSX.Element => {
  return (
    <Layout>
      <form>
        <label htmlFor="room-name">Room&apos;s name</label>
        <input type="text" id="room-name" name="room-name" />
        <label>Players</label>
        <input type="number" min="2" max="10" />
        <label>Private</label>
      </form>
    </Layout>
  );
};

export default CreateRoom;
