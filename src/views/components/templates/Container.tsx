import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

type ComponentProps = {
  children: React.ReactNode;
}

const Container: React.FC<ComponentProps> = ({
  children
}) => {
  return(
    <>
    <Header />
      <Wrapper>
        {children}
      </Wrapper>
    <Footer />
    </>
  );
}

export default Container;

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    max-width: 400px;
    min-width: 320px;
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    max-width: 600px;
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
`