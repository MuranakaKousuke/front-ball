import React from 'react';
import styled from 'styled-components';

import { SmallerText } from '../atoms/InlineText';

const Footer: React.FC = () => {
  return(
    <StyledFooter>
      <SmallerText backgroundColor='#8cc640' color='white'>
        ©️ Muranaka Kousuke
      </SmallerText>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: #8cc640;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`