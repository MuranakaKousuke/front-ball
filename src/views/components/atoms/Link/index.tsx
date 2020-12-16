import React, { Children } from 'react';
import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

const StyledLink = styled(ReactLink)`
  text-decoration: none;
`

type ComponentProps ={
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
}

const Link: React.FC<ComponentProps> = ({
  children,
  to,
  onClick,
}) => {
  return (
    <StyledLink
      to={to}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
}

export default Link;
