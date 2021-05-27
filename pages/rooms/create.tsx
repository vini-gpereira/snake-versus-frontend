import React, { FC } from 'react';
import Layout from 'components/layout';
import Input from 'components/input';

const CreateRoom: FC = (): JSX.Element => {
  return (
    <Layout>
      <form>
        <label htmlFor="room-name">Room&apos;s name</label>
        <Input type="text" id="room-name" name="room-name" />
        <label htmlFor="players-counting">Players</label>
        <Input type="number" id="players-counting" min="2" max="10" />
        <label htmlFor="checkbox">Private</label>
        <Input type="checkbox" id="checkbox" name="checkbox" />
      </form>
    </Layout>
  );
};

export default CreateRoom;
