import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LargeText }  from '../atoms/InlineText';
import Image from '../atoms/Image';
import menu from '../../../../src/images/menu.png';
import logo from '../../../../src/images/logo.png';
import { AppState } from '../../../store/store';

import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../store/user/actions';


const Header: React.FC = () => {
  const userState = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  return(
    <StyledHeader>
      <Wrapper>
        {userState.login ?
          <LinkWrapper>
            <Menu to='/players/1'>
              <Image width='20px' height='20px' display='inline-block' src={menu} />
            </Menu>
            <Logo to='/'>
              <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
              <Image width='20px' height='20px' display='inline-block' src={logo} />
            </Logo>
            <MenuList>
              <StyledLink to='/players'>{userState.name}</StyledLink>
              <StyledLink
                to='/'
                onClick={() => {
                  localStorage.removeItem('user');
                  dispatch(deleteUser())
                }}
              >
                ログアウト
              </StyledLink>
            </MenuList>
          </LinkWrapper>
        :
          <LinkWrapper>
            <Menu to='/players/1'>
              <Image width='20px' height='20px' display='inline-block' src={menu} />
            </Menu>
            <Logo to='/'>
              <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
              <Image width='20px' height='20px' display='inline-block' src={logo} />
            </Logo>
            <MenuList>
              <StyledLink to='/signup'>新規登録</StyledLink>
              <StyledLink to='/login/new'>ログイン</StyledLink>
            </MenuList>
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Menu = styled(StyledLink)`
  flex: 1;
`

const Logo = styled(StyledLink)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuList = styled.div`
  flex: 1;
  text-align: right;
`