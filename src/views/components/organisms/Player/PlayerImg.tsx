import React from 'react';
import styled from 'styled-components';

import { PlayerImage } from '../../atoms/Image';

import player from '../../../../images/player.png';

const PlayerImg = () => {
  return (
    <Wrapper>
      <PlayerImage src={player} />
    </Wrapper>
  );
}

export default PlayerImg;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`