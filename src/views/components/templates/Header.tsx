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
        :
          <LinkWrapper>
            <Link to='/players/1'>
              <Image width='20px' height='20px' display='inline-block' src={menu} />
            </Link>
            <MenuCenter to='/'>
              <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
              <Image width='20px' height='20px' display='inline-block' src={logo} />
            </MenuCenter>
            <MenuLeft>
              <Link to='/signup'>新規登録</Link>
              <Link to='/login/new'>ログイン</Link>
            </MenuLeft>
          </LinkWrapper>
        }
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: #8cc640;
  height: 40px;
`

const Wrapper = styled.div`
  margin: 0 auto;
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

const LinkWrapper = styled.div`
  margin: 0 1em;
  height: 40px;
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