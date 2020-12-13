import React from 'react';
import styled from 'styled-components';

const Player = () => {
  return (
    <Container>
      <PlayerHeader>
        <PlayerBasic>
          <div>
            <div>村中</div>
            <div>ポジション：二</div>
          </div>
          <div>画像</div>
        </PlayerBasic>
        <div>
          <div>成績</div>
          <PlayerBasicStatus>
            <div>フォーム：スタンダード1</div>
            <div>投打：右投右打</div>
          </PlayerBasicStatus>
        </div>
      </PlayerHeader>
      <PlayerStatusWrapper>
        <PlayerStatus>
          <div>弾道</div>
          <div>ミート</div>
          <div>パワー</div>
          <div>走力</div>
          <div>肩力</div>
          <div>守備力</div>
          <div>捕球力</div>
        </PlayerStatus>
        <PlayerSpecialStatus>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
          <div>chance</div>
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
const PlayerHeader = styled.div`
  display: grid;
  gap: 0.5em;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  /* タブレット・PC用 */
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PlayerBasic = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const PlayerBasicStatus = styled.div`
  display: flex;
  flex: row;
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

const PlayerStatus = styled.div`
  display: grid;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(7, 1fr);
  }
  /* タブレット・PC用 */
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const PlayerSpecialStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`