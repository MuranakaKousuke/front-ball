import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store/reducer';
import { changeLogout } from '../../../store/login/actions';

import Link from '../atoms/Link';
import { LargeText }  from '../atoms/InlineText';
import Image from '../atoms/Image';
import menu from '../../../../src/images/menu.png';
import logo from '../../../../src/images/logo.png';

const Header: React.FC = () => {
  const loginState = useSelector((state: AppState) => state.login);
  const login = loginState.success;
  const myteamId = loginState.teamId;

  const teamsState = useSelector((state: AppState) => state.teams)
  const myteam = myteamId && teamsState.byId[myteamId];
  const dispatch = useDispatch();

  return(
    <StyledHeader>
      <Wrapper>
        <LinkWrapper>
          <MenuBar>
            <Link to='/'><Image width='20px' height='20px' display='inline-block' src={menu} /></Link>
          </MenuBar>
          <Logo to='/'>
            <LargeText fontWeight='bold' backgroundColor='#8cc640' color='white'>クサプロ</LargeText>
            <Image width='20px' height='20px' display='inline-block' src={logo} />
          </Logo>
          <MenuLists>
            {login && myteam ?
              <>
                <Link to='/myteam'>{myteam.name}</Link>
                <Link to='/' onClick={() => {
                  localStorage.removeItem('team');
                  dispatch(changeLogout());
                  }}
                > ログアウト</Link>
              </>
            :
              <>
                <Link to='/signup'>新規登録</Link>
                <Link to='/login/new'>ログイン</Link>
              </>
            }
          </MenuLists>
        </LinkWrapper>
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
  /* PC用 */
  @media screen and (min-width: 1025px) {
    max-width: 1020px;
    margin: 0 auto;
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
  @media screen and (min-width: 1025px) {
    margin: 0 2em;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuBar = styled.div`
  flex: 1;
  text-align: left;
  /* PC用 */
  @media screen and (min-width: 1025px) {
    display: none;
  }
`

const Logo = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuLists = styled.div`
  flex: 1;
  text-align: right;
`