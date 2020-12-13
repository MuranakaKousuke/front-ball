import React from 'react';
import styled from 'styled-components';

import LabelText from '../../molecules/LabelText';

const PlayerBasicStatus = () => {
  return (
    <Wrapper>
      <LabelText
        label='フォーム'
        text='スタンダード1'
      />
      <LabelText
        label='投打'
        text='右投両打'
      />
    </Wrapper>
  );
}

export default PlayerBasicStatus;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5em;
  flex: row;
`