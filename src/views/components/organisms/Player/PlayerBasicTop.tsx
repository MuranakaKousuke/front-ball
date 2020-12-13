import React from 'react';
import styled from 'styled-components';

import { NameLabel } from '../../atoms/Label';
import { TeamImage } from '../../atoms/Image';
import { SmallerText } from '../../atoms/InlineText';

import dena from '../../../../images/dena.png'

const PlayerBasicTop = () => {
  return (
    <Wrapper>
      <NameLabel>村中</NameLabel>
      <TeamImage src={dena} />
      <SmallerText>4</SmallerText>
    </Wrapper>
  );
}

export default PlayerBasicTop;

const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`
