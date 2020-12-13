import React from 'react';
import styled from 'styled-components';

import LabelText from '../../molecules/LabelText';

import PlayerBasicTop from './PlayerBasicTop';

const PlayerBasic = () => {
  return (
    <Wrapper>
      <PlayerBasicTop />
      <LabelText label='守備位置' text='二三' />
    </Wrapper>
  );
}

export default PlayerBasic;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5em
`
