import React from 'react'
import styled from 'styled-components';

// --------------- 抽象 --------------- //
type Props = {
  src: string;
  width?: string;
  height?: string;
  display?: string;
};

const StyledImage = styled.img<Props>`
  width: ${({width}) => width ? width : 'auto'};
  height: ${({height}) => height ? height : 'auto'};
  display: ${({display}) => display ? display : 'block'};
`

const Image: React.FC<Props> = ({
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
// childrenのみをPropsとして受け取る
type ImageProps = {
  src: string;
}

// --------------- チーム画像 --------------- //
export const TeamImage: React.FC<ImageProps> = ({
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
export const PlayerImage: React.FC<ImageProps> = ({
  src
}) => {
  return (
    <Image
      src={src}
      width='49px'
      display='inline-block'
    />
  );
}