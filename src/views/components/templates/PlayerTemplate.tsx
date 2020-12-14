import React from 'react';
import styled from 'styled-components';

import PlayerHeader from '../organisms/Player/PlayerHeader';

import { StatusLabel } from '../atoms/Label';
import { SmallText , StatusText, BallisticText, StatusLankText, SpecialLabelText, SpecialLankText } from '../atoms/InlineText';

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
          <SpecialStatus>
            <SpecialLabelText status={88}>チャンス</SpecialLabelText>
            <SpecialLankText status={88} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={91}>対左投手</SpecialLabelText>
            <SpecialLankText status={91} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={42}>キャッチャー</SpecialLabelText>
            <SpecialLankText status={42} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={18}>ケガしにくさ</SpecialLabelText>
            <SpecialLankText status={18} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={52}>盗塁</SpecialLabelText>
            <SpecialLankText status={52} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={69}>走塁</SpecialLabelText>
            <SpecialLankText status={69} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={21}>送球</SpecialLabelText>
            <SpecialLankText status={21} />
          </SpecialStatus>
          <SpecialStatus>
            <SpecialLabelText status={70}>回復</SpecialLabelText>
            <SpecialLankText status={70} />
          </SpecialStatus>
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
  min-height: 1.2em;
  text-align: center;
  display: grid;
  align-items: center;
  grid-template-columns: 4fr 1fr;
  background-color:#ffffff;
  border: solid 1px #215671;
  border-radius: 2px;
`