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
        <ContactWrapper>お問い合わせはこちら</ContactWrapper>
        <ContentWrapper>{children}</ContentWrapper>
        <AdsenseWrapper>ここに広告が入ります</AdsenseWrapper>
      </Wrapper>
    <Footer />
    </>
  );
}

export default Container;

const Wrapper = styled.div`
  min-height: calc(100vh - 10em);
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 1em 1em;
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 1em;
  }
`

const ContactWrapper = styled.div`
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    order: 2;
    background-color: blue;
    min-height: 100px;
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    order: 3;
    margin-bottom: 1em;
    background-color: blue;
    min-height: 120px;
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    order: 1;
    margin: 1em 0;
    background-color: blue;
    min-height: calc(100vh - 10em);
  }
`

const ContentWrapper = styled.div`
  margin: 1em auto 0;
  background-color: white;
  width: 100%;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    order: 1;
    min-height: calc(100vh - 25em);
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    order: 1;
    margin: 1em auto 0;
    min-height: calc(100vh - 23em);
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    order: 2;
    margin: 1em auto;
    min-height: calc(100vh - 10em);
  }
`

const AdsenseWrapper = styled.div`
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    order: 3;
    background-color: red;
    min-height: 40px;
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    order: 2;
    margin-top: 1em;
    background-color: red;
    min-height: calc(100vh - 23em);
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    order: 3;
    margin: 1em 0;
    background-color: red;
    min-height: 200px;
  }
`