import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './store/store';

import { useComponentWillMount } from './hooks/lifeCycle';
import { fetchTeam } from './store/team/actions';

import Container from './views/components/templates/Container';
import Top from './views/pages/Top';
import SignUp from './views/pages/SignUp';
import SignIn from './views/pages/SignIn';
import MyTeam from './views/pages/MyTeam';
import TeamDetail from './views/pages/TeamDetail';
import TeamEdit from './views/pages/TeamEdit';
import Players from './views/pages/Players';
import PlayerDetail from './views/pages/PlayerDetail';
import PlayerNew from './views/pages/PlayerNew';
import PlayerEdit from './views/pages/PlayerEdit';
import Scores from './views/pages/Scores';
import ScoreNew from './views/pages/ScoreNew';
import ScoreDetail from './views/pages/ScoreDetail';
import Opponents from './views/pages/Opponents';
import OpponentNew from './views/pages/OpponentNew';
import OpponentDetail from './views/pages/OpponentDetail';
import OpponentEdit from './views/pages/OpponentEdit';
import Recruits from './views/pages/Recruits';
import RecruitNew from './views/pages/RecruitNew';
import RecruitDetail from './views/pages/RecruitDetail';
import RecruitEdit from './views/pages/RecruitEdit';




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
  const LoginRoute = (props: RouteProps) => {
    if (!login) console.log('お探しのページはログインユーザーしか入れません')
    return login ? <Route {...props} /> : <Redirect to="/login/new" />;
  }

  // ---------- マイチームのユーザーしか入ることの出来ないページを設定 ----------
  type PrivateRouteParamsTypes = {
    team_id: string
  }
  const PrivateRoute = (props: RouteProps) => {
    const id = useSelector((state: AppState) => state.team.id);
    const { team_id } = useParams<PrivateRouteParamsTypes>()

    const success = (id === Number(team_id) )
    if (!success) console.log('お探しのページはマイチームユーザーしか入れません')
    return success ? <Route {...props} /> : <Redirect to="/" />;
  }

  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={Top} /> {/* TOP */}
          <GuestRoute exact path="/signup" component={SignUp} /> {/* 新規登録 */}
          <GuestRoute exact path="/login/new" component={SignIn} /> {/* ログイン */}
          <LoginRoute exact path="/myteam" component={MyTeam} /> {/* マイチームページ */}
          <LoginRoute exact path="/teams/:team_id" component={TeamDetail} /> {/* チーム詳細 */}
          <PrivateRoute exact path="/teams/:team_id/edit" component={TeamEdit} /> {/* マイチーム編集 */}
          <LoginRoute exact path="/teams/:team_id/players" component={Players} /> {/* チーム選手一覧 */}
          <LoginRoute exact path="/teams/:team_id/players/new" component={PlayerNew} /> {/* チーム選手登録 */}
          <LoginRoute exact path="/teams/:team_id/players/:player_id" component={PlayerDetail} /> {/* チーム選手詳細 */}
          <PrivateRoute exact path="/teams/:team_id/players/:player_id/edit" component={PlayerEdit} /> {/* マイチーム選手編集 */}
          <LoginRoute exact path="/teams/:team_id/scores" component={Scores} /> {/* マイチーム成績 */}
          <LoginRoute exact path="/teams/:team_id/scores/new" component={ScoreNew} /> {/* マイチーム成績登録 */}
          <LoginRoute exact path="/teams/:team_id/scores/:score_id" component={ScoreDetail} /> {/* マイチーム成績詳細 */}
          <LoginRoute exact path="/opponents" component={Opponents} /> {/* 対戦相手募集一覧 */}
          <LoginRoute exact path="/opponents/new" component={OpponentNew} /> {/* 対戦相手募集登録 */}
          <LoginRoute exact path="/opponents/:opponent_id" component={OpponentDetail} /> {/* 対戦相手募集詳細 */}
          <PrivateRoute exact path="/teams/:team_id/opponents/:opponent_id/edit" component={OpponentEdit} /> {/* 対戦相手募集編集 */}
          <GuestRoute exact path="/recruits" component={Recruits} /> {/* 選手募集一覧 */}
          <GuestRoute exact path="/recruits/new" component={RecruitNew} /> {/* 選手募集登録 */}
          <GuestRoute exact path="/recruits/:recruit_id" component={RecruitDetail} /> {/* 選手募集詳細 */}
          <PrivateRoute exact path="/teams/:team_id//recruits/:recruit_id/edit" component={RecruitEdit} /> {/* 選手募集編集 */}
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;