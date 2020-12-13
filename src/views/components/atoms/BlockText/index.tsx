import React from 'react';
import styled from 'styled-components';
import { TextColor } from "../../../../utils/color";

// --------------- 抽象 --------------- //
type StyledProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

type ComponentsProps = {
  children: string;
}

const StyledText = styled.p<StyledProps>`
  color: ${({color}) => color ? color : TextColor.BLACK};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.6em'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
`

const BlockText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  );
}

export default BlockText;

// --------------- 具象 --------------- //
// --------------- 12pxテキスト --------------- //
export const SmallText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontWeight
}) => {
  return (
    <BlockText
      color={color}
      fontWeight={fontWeight}
      fontSize='1em'
    >
      {children}
    </BlockText>
  );
}

// --------------- 14pxテキスト --------------- //
export const SmallerText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontWeight
}) => {
  return (
    <BlockText
      color={color}
      fontWeight={fontWeight}
      fontSize='1.4em'
    >
      {children}
    </BlockText>
  );
}

// --------------- 16pxテキスト --------------- //
export const MediumText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontWeight
}) => {
  return (
    <BlockText
      color={color}
      fontWeight={fontWeight}
      fontSize='1.6em'
    >
      {children}
    </BlockText>
  );
}

// --------------- 18pxテキスト --------------- //
export const LargerText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontWeight
}) => {
  return (
    <BlockText
      color={color}
      fontWeight={fontWeight}
      fontSize='1.8em'
    >
      {children}
    </BlockText>
  );
}

// --------------- 20pxテキスト --------------- //
export const LargeText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontWeight
}) => {
  return (
    <BlockText
      color={color}
      fontWeight={fontWeight}
      fontSize='2em'
    >
      {children}
    </BlockText>
  );
}