import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store/store';
import { deleteTeam } from '../../../store/team/actions';

import Link from '../atoms/Link';
import { LargeText }  from '../atoms/InlineText';
import Image from '../atoms/Image';
import menu from '../../../../src/images/menu.png';
import logo from '../../../../src/images/logo.png';




const Header: React.FC = () => {
  const teamState = useSelector((state: AppState) => state.team);
  const dispatch = useDispatch();

  return(
    <StyledHeader>
      <Wrapper>
        {teamState.login ?
          <>
            <EmptyBox />
            <LinkWrapper>
              <MenuRight>
                <Link to='/players/1'>
                  <Image width='20px' height='20px' display='inline-block' src={menu} />
                </Link>
              </MenuRight>
              <MenuCenter to='/'>
                <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
                <Image width='20px' height='20px' display='inline-block' src={logo} />
              </MenuCenter>
              <MenuLeft>
                <Link to='/mypage'>{teamState.email}</Link>
                <Link
                  to='/'
                  onClick={() => {
                    localStorage.removeItem('team');
                    dispatch(deleteTeam())
                  }}
                >
                  ログアウト
                </Link>
              </MenuLeft>
            </LinkWrapper>
            <EmptyBox />
          </>
        :
          <>
          <EmptyBox />
          <LinkWrapper>
          <MenuRight>
            <Link to='/players/1'>
              <Image width='20px' height='20px' display='inline-block' src={menu} />
            </Link>
          </MenuRight>
            <MenuCenter to='/'>
              <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
              <Image width='20px' height='20px' display='inline-block' src={logo} />
            </MenuCenter>
            <MenuLeft>
              <Link to='/signup'>新規登録</Link>
              <Link to='/login/new'>ログイン</Link>
            </MenuLeft>
          </LinkWrapper>
          <EmptyBox />
          </>
        }
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: #8cc640;
  height: 4em;
`

const Wrapper = styled.div`
  margin: 0 auto;
  /* スマホ用 */
  /* @media screen and (max-width: 600px) {
    max-width: 400px;
    min-width: 320px;
  } */
  /* タブレット用 */
  /* @media screen and (max-width: 1024px) and (min-width: 600px) {
    max-width: 600px;
  } */
  /* PC用 */
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
  }
`

const LinkWrapper = styled.div`
  height: 40px;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    margin: 0 1em;
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    margin: 0 2em;
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    margin: 0 2em;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuRight = styled.div`
  flex: 1;
  text-align: left;
`

const MenuCenter = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuLeft = styled.div`
  flex: 1;
  text-align: right;
`

const EmptyBox = styled.div`

`