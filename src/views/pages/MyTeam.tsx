import React from 'react';
import MyTeamTemplate from '../components/templates/MyTeamTemplate';

import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

const MyTeam: React.FC = () => {
  const teamState = useSelector((state: AppState) => state.team)

  return(
    <MyTeamTemplate
      teamState={teamState}
    />
  );
}

export default MyTeam;