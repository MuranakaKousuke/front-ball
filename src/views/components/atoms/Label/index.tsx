import React from 'react';
import styled from 'styled-components';

// --------------- 抽象 --------------- //
type StyledProps = {
  color: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  display: string;
  width?: string;
  textAlign: string;
  backgroundColor: string;
  borderRadius: string;
  border?: string;
};

type ComponentsProps = {
  children: React.ReactNode;
}

const StyledLabel = styled.span<StyledProps>`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1rem'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
  letter-spacing: ${({letterSpacing}) => letterSpacing ? letterSpacing : '0px'};
  display: ${({display}) => display};
  width: ${({width}) => width ? width : '100%'};
  text-align: ${({textAlign}) => textAlign};
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: ${({borderRadius}) => borderRadius};
  border: ${({border}) => border ? border : 'none'};
`

const Label: React.FC<StyledProps & ComponentsProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  display,
  width,
  textAlign,
  backgroundColor,
  borderRadius,
  border,
}) => {
  return (
    <StyledLabel
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      display={display}
      width={width}
      textAlign={textAlign}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
    >
      {children}
    </StyledLabel>
  );
}

export default Label;

// --------------- 具象 --------------- //
// --------------- 選手名ラベル --------------- //
export const NameLabel: React.FC<ComponentsProps> = ({
  children,
}) => {
  return (
    <Label
      color='#1f1400'
      fontSize='1.6em'
      fontWeight='bold'
      backgroundColor="#ffea4a"
      display='inline-block'
      width='80px'
      borderRadius='5px'
      letterSpacing='2px'
      textAlign='center'
    >
      {children}
    </Label>
  );
}
// --------------- 基本情報ステータス名ラベル --------------- //
export const BasicLabel: React.FC<ComponentsProps> = ({
  children,
}) => {
  return (
    <Label
      color='#215671'
      fontSize='1.2em'
      fontWeight='bold'
      backgroundColor="#ffffff"
      display='inline-block'
      width='60px'
      borderRadius='5px'
      textAlign='center'
      border='solid 1px #215671'
    >
      {children}
    </Label>
  );
}

// --------------- 基本情報ステータス名ラベル --------------- //
// TODO: レスポンシブになるよう修正する
const statusLabelWidthCreator = () => {
  const mq = window.matchMedia('(max-width: 600px)');
  if (mq.matches) {
    return '100%';
  } else {
    return '60px';
  }
};
export const StatusLabel: React.FC<ComponentsProps> = ({
  children,
}) => {
  return (
    <Label
      color='#215671'
      fontSize='1.2em'
      fontWeight='bold'
      backgroundColor="#ffffff"
      display='inline-block'
      width={statusLabelWidthCreator()}
      borderRadius='5px'
      textAlign='center'
      border='solid 1px #215671'
    >
      {children}
    </Label>
  );
}