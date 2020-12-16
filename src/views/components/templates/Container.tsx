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
        <MainWrapper>
          <MenusWrapper>
            <MenuWrapper>チーム編集</MenuWrapper>
            <MenuWrapper>選手一覧</MenuWrapper>
            <MenuWrapper>対戦成績</MenuWrapper>
            <MenuWrapper>対戦相手</MenuWrapper>
            <PcContactWrapper>お問い合わせはこちら</PcContactWrapper>
          </MenusWrapper>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </MainWrapper>
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
  @media screen and (min-width: 1025px) {
    max-width: 1020px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 4fr 1fr;
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
  @media screen and (min-width: 1025px) {
    /* order: 1;
    margin: 1em 0;
    background-color: blue;
    min-height: calc(100vh - 10em); */
    display: none
  }
`

const MainWrapper = styled.div`
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
  @media screen and (min-width: 1025px) {
    order: 1;
    margin: 1em auto;
    min-height: calc(100vh - 10em);
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1em;
  }
`

const MenusWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1025px) {
    display: block;
    background-color: purple;
    height: 100%;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 3em;
  font-size: 1.4em;
  background-color: yellowgreen;
`

const PcContactWrapper = styled.div`
  min-height: 20em;
  font-size: 1.4em;
  background-color: blue;
`

const ContentWrapper = styled.div`
  margin: 1em;
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
  @media screen and (min-width: 1025px) {
    order: 2;
    margin: 1em 0;
    background-color: red;
    min-height: 200px;
  }
`