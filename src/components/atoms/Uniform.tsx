import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const StyledUniform = styled.span`
  margin-left: '4px';
  color: '#215671';
  font-weight: 'bold';
  font-size: '1.6em';
  background-color: "#ffffff";
  border: 'solid 1px #1f1400';
  display: 'inline-block';
  width: '24px';
  border-radius: '5px';
  letter-spacing: '5px';
  text-align: 'center'
`

const Uniform: React.FC<Props> = ({
  children
}) => {
  return (
    <StyledUniform>{children}</StyledUniform>
  );
}

export default Uniform;