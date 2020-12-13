import React from 'react';
import styled from 'styled-components';
import dena from '../../../../src/images/dena.png';
import yashima from '../../../../src/images/yashima.png';

import { NameLabel, StatusLabel, BasicStatusLabel } from '../../atoms/Label';
import { MainPositionText, SubPositionText, SmallText } from '../../atoms/Text';
import { TeamImage, PlayerImage } from '../../atoms/Image';
import Uniform from '../../atoms/Uniform';

const PlayerBasicStatus = () => {
  return (
    <PlayerGridWrapper>
      <div>
        <FlexWrapper>
          <NameLabel>八島</NameLabel>
          <TeamImage src={dena} />
          <Uniform>2</Uniform>
        </FlexWrapper>
        <FlexWrapper>
          <StatusLabel>守備位置</StatusLabel>
          <MainPositionText>遊</MainPositionText>
          <SubPositionText>二</SubPositionText>
          <SubPositionText>外</SubPositionText>
        </FlexWrapper>
      </div>
      <FlexWrapper>
        <PlayerImage src={yashima} />
        <div>
          <div>
            <BasicStatusLabel>成績</BasicStatusLabel>
            <SmallText>率.333 2本 7点</SmallText>
          </div>
          <div>
            <BasicStatusLabel>投打</BasicStatusLabel>
            <SmallText>右投右打</SmallText>
          </div>
        </div>
      </FlexWrapper>
    </PlayerGridWrapper>
  );
}

export default PlayerBasicStatus;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

const PlayerGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
`