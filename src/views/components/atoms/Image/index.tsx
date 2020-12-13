import React from 'react'
import styled from 'styled-components';

// --------------- 抽象 --------------- //
type StyledProps = {
  width?: string;
  height?: string;
  display?: string;
};

type ComponentProps = {
  src: string;
}

const StyledImage = styled.img<StyledProps>`
  width: ${({width}) => width ? width : 'auto'};
  height: ${({height}) => height ? height : 'auto'};
  display: ${({display}) => display ? display : 'block'};
`

const Image: React.FC<ComponentProps & StyledProps> = ({
  src,
  width,
  height,
  display
}) => {
  return (
    <StyledImage
      src={src}
      width={width}
      height={height}
      display={display}
    />
  );
}

export default Image;

// --------------- 具象 --------------- //
// --------------- チーム画像 --------------- //
export const TeamImage: React.FC<ComponentProps> = ({
  src
}) => {
  return (
    <Image
      src={src}
      height='24px'
      display='inline-block'
    />
  );
}

// --------------- 選手画像 --------------- //
export const PlayerImage: React.FC<ComponentProps> = ({
  src
}) => {
  return (
    <Image
      src={src}
      width='50px'
      display='inline-block'
    />
  );
}