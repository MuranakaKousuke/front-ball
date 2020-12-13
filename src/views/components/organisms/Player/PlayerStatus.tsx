import React from 'react';
import styled from 'styled-components';

import { StatusLabel } from '../../atoms/Label';
import { BallisticText, StatusLankText, StatusText } from '../../atoms/Text';

const PlayerStatus = () => {
  return(
    <StatusGridWrapper>
      <div>
        <StatusLabel>弾道</StatusLabel>
        <BallisticText>↗︎</BallisticText>
        <StatusText>3</StatusText>
      </div>
      <div>
        <StatusLabel>ミート</StatusLabel>
        <StatusLankText status={88} />
        <StatusText>88</StatusText>
      </div>
      <div>
        <StatusLabel>パワー</StatusLabel>
        <StatusLankText status={91} />
        <StatusText>91</StatusText>
      </div>
      <div>
        <StatusLabel>走力</StatusLabel>
        <StatusLankText status={69} />
        <StatusText>69</StatusText>
      </div>
      <div>
        <StatusLabel>肩力</StatusLabel>
        <StatusLankText status={70} />
        <StatusText>70</StatusText>
      </div>
      <div>
        <StatusLabel>守備力</StatusLabel>
        <StatusLankText status={52} />
        <StatusText>52</StatusText>
      </div>
      <div>
        <StatusLabel>捕球</StatusLabel>
        <StatusLankText status={42} />
        <StatusText>42</StatusText>
      </div>
    </StatusGridWrapper>
  );
}

export default PlayerStatus;

const StatusGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`