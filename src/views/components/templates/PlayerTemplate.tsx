import React from 'react';
import styled from 'styled-components';

import PlayerHeader from '../organisms/Player/PlayerHeader';

import { StatusLabel } from '../atoms/Label';
import { StatusText, BallisticText, StatusLankText } from '../atoms/InlineText';

const Player = () => {
  return (
    <Container>
      <PlayerHeader />
      <PlayerStatusWrapper>
        <PlayerStatusList>
          <PlayerStatus>
            <StatusLabel>弾道</StatusLabel>
            <BallisticText>↗︎</BallisticText>
            <StatusText>3</StatusText>
          </PlayerStatus>
          <PlayerStatus>
            <StatusLabel>ミート</StatusLabel>
            <StatusLankText status={88} />
            <StatusText>88</StatusText>
          </PlayerStatus>
          <PlayerStatus>
            <StatusLabel>パワー</StatusLabel>
            <StatusLankText status={91} />
            <StatusText>91</StatusText>
          </PlayerStatus>
          <PlayerStatus>
            <StatusLabel>走力</StatusLabel>
            <StatusLankText status={69} />
            <StatusText>69</StatusText>
          </PlayerStatus>
          <PlayerStatus>
            <StatusLabel>肩力</StatusLabel>
            <StatusLankText status={70} />
            <StatusText>70</StatusText>
          </PlayerStatus>
          <PlayerStatus>
            <StatusLabel>守備力</StatusLabel>
            <StatusLankText status={52} />
            <StatusText>52</StatusText>
          </PlayerStatus>
          <PlayerStatus>
            <StatusLabel>捕球力</StatusLabel>
            <StatusLankText status={42} />
            <StatusText>42</StatusText>
          </PlayerStatus>
        </PlayerStatusList>
        <PlayerSpecialStatus>
          <SpecialStatus>チャンスC</SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
          <SpecialStatus></SpecialStatus>
        </PlayerSpecialStatus>
      </PlayerStatusWrapper>
    </Container>
  );
}

export default Player;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    max-width: 600px;
  }
`

const PlayerStatusWrapper = styled.div`
  margin-top: 0.5em;
  display: grid;
  gap: 0.5em;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  /* タブレット・PC用 */
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 2fr;
  }
`

const PlayerStatusList = styled.div`
  display: grid;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5em;
  }
  /* タブレット・PC用 */
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const PlayerStatus = styled.div`
  display: flex;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    flex-direction : column;
    align-items: center;
    gap: 0.2em;
  }
  /* タブレット・PC用 */
  @media screen and (min-width: 600px) {
    flex: row;
    align-items: center;
    gap: 1.5em;
  }
`


const PlayerSpecialStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const SpecialStatus = styled.div`
  min-height: 1.6em;
  background-color:#ffffff;
  border: solid 1px #215671;
  border-radius: 2px;
`