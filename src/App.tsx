import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './store/store';
import { fetchTeam } from './store/team/actions';

import Container from './views/components/templates/Container';
import Top from './views/pages/Top';
import MyPage from './views/pages/MyPage';
import Player from './views/pages/Player';
import Players from './views/pages/Players';
import SignUp from './views/pages/SignUp';
import SignIn from './views/pages/SignIn';


function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: AppState) => state.team.login)

  React.useEffect(() => {
    if (!login) {
      const team = localStorage.getItem('team');
      team && dispatch(fetchTeam(JSON.parse(team)))
    }
  }, [])

  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login/new" component={SignIn} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={Player} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;