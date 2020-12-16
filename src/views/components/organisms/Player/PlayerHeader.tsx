import React from 'react';
import styled from 'styled-components';

import LabelText from '../../molecules/LabelText';

import PlayerBasic from './PlayerBasic';
import PlayerBasicStatus from './PlayerBasicStatus';
import PlayerImg from './PlayerImg';

const PlayerHeader = () => {
  return (
    <Wrapper>
      <PlayerBasicLeft>
        <PlayerBasic />
        <PlayerImg />
      </PlayerBasicLeft>
      <PlayerBasicRight>
        <LabelText label='成績' text='率 .312 40本 94打点' />
        <PlayerBasicStatus />
      </PlayerBasicRight>
    </Wrapper>
  );
}

export default PlayerHeader;

const Wrapper = styled.div`
  display: grid;
  gap: 0.2em;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  /* タブレット・PC用 */
  @media screen and (min-width: 600px) {
    grid-template-columns: 2fr 3fr;
  }
`
const PlayerBasicLeft = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const PlayerBasicRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.2em
`