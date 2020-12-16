import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './store/store';

import { useComponentWillMount } from './hooks/lifeCycle';
import { fetchTeam } from './store/team/actions';

import Container from './views/components/templates/Container';
import Top from './views/pages/Top';
import MyPage from './views/pages/MyTeam';
import Player from './views/pages/Player';
import Players from './views/pages/Players';
import SignUp from './views/pages/SignUp';
import SignIn from './views/pages/SignIn';


function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: AppState) => state.team.login);

  // ---------- willMountで過去のログイン履歴がlocalStorageにあればログインする ----------
  const loginCheck = () => {
    if (!login) {
      const team = localStorage.getItem('team');
      team && dispatch(fetchTeam(JSON.parse(team)));
    }
  }
  useComponentWillMount(loginCheck);

  // ---------- 未ログインユーザーしか入ることの出来ないページを設定 ----------
  const GuestRoute = (props: RouteProps) => {
    if (login) console.log('お探しのページは未ログインユーザーしか入れません')
    return login ? <Redirect to="/" /> : <Route {...props} />;
  }

  // ---------- ログインユーザーしか入ることの出来ないページを設定 ----------
  const PrivateRoute = (props: RouteProps) => {
    if (!login) console.log('お探しのページはログインユーザーしか入れません')
    return login ? <Route {...props} /> : <Redirect to="/login/new" />;
  }

  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={Top} />
          <GuestRoute exact path="/signup" component={SignUp} />
          <GuestRoute exact path="/login/new" component={SignIn} />
          <PrivateRoute exact path="/mypage" component={MyPage} />
          <PrivateRoute exact path="/players" component={Players} />
          <PrivateRoute exact path="/players/:id" component={Player} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;