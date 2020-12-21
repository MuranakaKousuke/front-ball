import React from 'react';
import MyTeamTemplate from '../components/templates/MyTeamTemplate';

import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducer';

const MyTeam: React.FC = () => {
  const myteamId = useSelector((state: AppState) => state.login.teamId)
  const myteam = myteamId && useSelector((state: AppState) => state.teams.byId)[myteamId];

  return(
    <MyTeamTemplate />
  );
}

export default MyTeam;