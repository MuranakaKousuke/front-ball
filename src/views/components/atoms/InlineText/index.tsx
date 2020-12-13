import React from 'react';
import styled from 'styled-components';
import { TextColor, LankColor } from "../../../../utils/color";

// --------------- 抽象 --------------- //
type StyledProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

type ComponentsProps = {
  children: string;
}

const StyledText = styled.span<StyledProps>`
  color: ${({color}) => color ? color: TextColor.DEFAULT};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.6em'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
`

const InlineText: React.FC<ComponentsProps & StyledProps> = ({
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

export default InlineText;

// --------------- 具象 --------------- //
// --------------- 12pxテキスト --------------- //
export const SmallText: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
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
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
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
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
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
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
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
  fontWeight
}) => {
  return (
    <InlineText
      color={color}
      fontWeight={fontWeight}
      fontSize='2em'
    >
      {children}
    </InlineText>
  );
}

// --------------- メインポジションテキスト --------------- //
export const MainPositionText: React.FC<ComponentsProps> = ({
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

// --------------- サブポジションテキスト --------------- //
export const SubPositionText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <SmallerText
      color={TextColor.DEFAULT}
      fontWeight='normal'
    >
      {children}
    </SmallerText>
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
// --------------- ステータスランクテキスト --------------- //
const lankCreator = (status: number): string => {
  switch (true) {
    case status >= 90:
      return 'S';
    case status >= 80 && status < 90:
      return 'A';
    case status >= 70 && status < 80:
      return 'B';
    case status >= 60 && status < 70:
      return 'C';
    case status >= 50 && status < 60:
      return 'D';
    case status >= 40 && status < 50:
      return 'E';
    case status >= 20 && status < 40:
      return 'F';
    case status >= 1 && status < 20:
      return 'G';
    default:
      return '?'
  }
}

const lankColorCreator = (status: number): string => {
  switch (true) {
    case status >= 90 && status <= 100:
      return LankColor.S;
    case status >= 80 && status < 90:
      return LankColor.A;
    case status >= 70 && status < 80:
      return LankColor.B;
    case status >= 60 && status < 70:
      return LankColor.C;
    case status >= 50 && status < 60:
      return LankColor.D;
    case status >= 40 && status < 50:
      return LankColor.E;
    case status >= 20 && status < 40:
      return LankColor.F;
    case status >= 1 && status < 20:
      return LankColor.G;
    default:
      return TextColor.BLACK;
  }
}

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