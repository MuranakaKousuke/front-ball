import React from 'react';

import PlayerBasicStatus from '../organisms/Player/PlayerBasicStatus';
import PlayerStatus from '../organisms/Player/PlayerStatus';

const Player = () => {
  return (
    <>
      <PlayerBasicStatus />
      <div style={{marginTop: '1rem'}} />
      <PlayerStatus />
    </>
  );
}

export default Player;