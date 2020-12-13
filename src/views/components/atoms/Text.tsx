import React from 'react';
import styled from 'styled-components';

// --------------- 抽象 --------------- //
type StyledProps = {
  color: string;
  fontSize?: string;
  fontWeight?: string;
  display?: string;
  textAlign?: string;
}

type ComponentsProps = {
  children: string;
}

const StyledText = styled.p<StyledProps>`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1em'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
  display: ${({display}) => display ? display : 'inline'};
  text-align: ${({textAlign}) => textAlign ? textAlign : 'left'};
`

const Text: React.FC<ComponentsProps & StyledProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  display,
  textAlign
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      display={display}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
}

export default Text;

// --------------- 具象 --------------- //
// --------------- 小さめテキスト --------------- //
export const SmallText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <Text
      color='#215671'
      fontSize='1.2em'
      fontWeight='bold'
      display='inline-block'
    >
      {children}
    </Text>
  );
}

// --------------- メインポジションテキスト --------------- //
export const MainPositionText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <Text
      color='#215671'
      fontSize='1.4em'
      fontWeight='bold'
      display='inline-block'
    >
      {children}
    </Text>
  );
}

// --------------- サブポジションテキスト --------------- //
export const SubPositionText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <Text
      color='#215671'
      fontSize='1em'
      fontWeight='normal'
      display='inline-block'
    >
      {children}
    </Text>
  );
}

// --------------- ステータス数値テキスト --------------- //
export const StatusText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <Text
      color='#215671'
      fontSize='1.4em'
      fontWeight='bold'
      display='block'
      textAlign='center'
    >
      {children}
    </Text>
  );
}

// --------------- 弾道テキスト --------------- //
export const BallisticText: React.FC<ComponentsProps> = ({
  children
}) => {
  return (
    <Text
      color='red'
      fontSize='1.8em'
      fontWeight='bold'
      display='block'
      textAlign='center'
    >
      {children}
    </Text>
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
    case status >= 90:
      return '#ffd700';
    case status >= 80 && status < 90:
      return '#ffc0cb';
    case status >= 70 && status < 80:
      return '#ff0000';
    case status >= 60 && status < 70:
      return '#ffa500';
    case status >= 50 && status < 60:
      return '#ffd700';
    case status >= 40 && status < 50:
      return '#008000';
    case status >= 20 && status < 40:
      return '#0000ff';
    case status >= 1 && status < 20:
      return '#808080';
    default:
      return '#808080';
  }
}

export const StatusLankText: React.FC<StatusProps> = ({
  status
}) => {
  return (
    <Text
      color={lankColorCreator(status)}
      fontSize='1.8em'
      fontWeight='bold'
      display='block'
      textAlign='center'
    >
      {lankCreator(status)}
    </Text>
  );
}