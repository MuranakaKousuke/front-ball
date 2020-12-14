import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LargeText }  from '../atoms/InlineText';
import Image from '../atoms/Image';
import menu from '../../../../src/images/menu.png';
import logo from '../../../../src/images/logo.png';


const Header: React.FC = () => {
  const login = false;

  return(
    <StyledHeader>
      <Wrapper>
        {login ?
          <LinkWrapper>
            <Menu to='/players/1'>
              <Image width='20px' height='20px' display='inline-block' src={menu} />
            </Menu>
            <Logo to='/'>
              <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
              <Image width='20px' height='20px' display='inline-block' src={logo} />
            </Logo>
            <MenuList>
              <StyledLink to='/players'>muranaka</StyledLink>
              <StyledLink to='/players/1'>ログアウト</StyledLink>
            </MenuList>
          </LinkWrapper>
        :
          <LinkWrapper>
            <Link to='/'>トップ</Link>
            <Link to='/signup'>新規登録</Link>
            <Link to='/players/1'>ログイン</Link>
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