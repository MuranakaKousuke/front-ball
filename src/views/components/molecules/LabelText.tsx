import React from 'react';
import styled from 'styled-components';

import { BasicLabel } from '../atoms/Label';
import { SmallerText } from '../atoms/InlineText';

type ComponentProps = {
  label: string;
  text: string;
}

const LabelText: React.FC<ComponentProps> = ({
  label,
  text
}) => {
  return (
    <LabelTextWrapepr>
      <BasicLabel>{label}</BasicLabel>
      <SmallerText>{text}</SmallerText>
    </LabelTextWrapepr>
  );
}

export default LabelText;

const LabelTextWrapepr = styled.div`
  display: flex;
  gap: 0.2em;
  align-items: center;
`