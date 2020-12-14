import React from 'react';
import styled from 'styled-components';

import { TextColor } from "../../../../utils/color";
import { lankCreator, lankColorCreator, specialLabelColorCreator, specialLankColorCreator } from '../../../../utils/caliculators';

// --------------- 抽象 --------------- //
type StyledProps = {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

type ComponentsProps = {
  children: string;
}

const StyledText = styled.span<StyledProps>`
  color: ${({color}) => color ? color: TextColor.DEFAULT};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'white'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.6em'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
`

const InlineText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
}) => {
  return (
    <StyledText
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  );
}

export default InlineText;

// --------------- 具象 --------------- //
// --------------- 12pxテキスト --------------- //
export const SmallText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  backgroundColor,
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      fontSize='1em'
    >
      {children}
    </InlineText>
  );
}

// --------------- 14pxテキスト --------------- //
export const SmallerText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  backgroundColor,
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      fontSize='1.4em'
    >
      {children}
    </InlineText>
  );
}

// --------------- 16pxテキスト --------------- //
export const MediumText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  backgroundColor,
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      fontSize='1.6em'
    >
      {children}
    </InlineText>
  );
}

// --------------- 18pxテキスト --------------- //
export const LargerText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  backgroundColor,
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      fontSize='1.8em'
    >
      {children}
    </InlineText>
  );
}

// --------------- 20pxテキスト --------------- //
export const LargeText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  backgroundColor,
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      fontSize='2em'
    >
      {children}
    </InlineText>
  );
}

// --------------- ステータス数値テキスト --------------- //
export const StatusText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <MediumText
      color={TextColor.DEFAULT}
      fontWeight='bold'
    >
      {children}
    </MediumText>
  );
}

// --------------- 弾道テキスト --------------- //
export const BallisticText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <LargeText
      color={TextColor.RED}
      fontWeight='bold'
    >
      {children}
    </LargeText>
  );
}

// --------------- statusを能力値として受け取る--------------- //
type StatusProps = {
  status: number;
}
// --------------- 基本ステータスランクテキスト --------------- //
export const StatusLankText: React.FC<StatusProps> = ({
  status
}) => {
  return (
    <LargeText
      color={lankColorCreator(status)}
      fontSize='1.8em'
      fontWeight='bold'
    >
      {lankCreator(status)}
    </LargeText>
  );
}

// --------------- statusを能力値として受け取る--------------- //
type SpecialLabelProps = {
  children: string;
  status: number;
}
// --------------- 特殊能力ラベルテキスト --------------- //
export const SpecialLabelText: React.FC<SpecialLabelProps> = ({
  children,
  status
}) => {
  const colorObj = specialLabelColorCreator(status);
  return (
    <SmallText
      color={colorObj.color}
      backgroundColor={colorObj.backGroundColor}
      fontSize='1.2em'
      fontWeight={colorObj.fontWeight}
    >
      {children}
    </SmallText>
  );
}

// --------------- 特殊能力ステータスランクテキスト --------------- //
export const SpecialLankText: React.FC<StatusProps> = ({
  status
}) => {
  const colorObj = specialLankColorCreator(status);
  return (
    <SmallText
      color={colorObj.color}
      backgroundColor={colorObj.backGroundColor}
      fontSize='1.2em'
      fontWeight='bold'
    >
      {lankCreator(status)}
    </SmallText>
  );
}