import React from 'react';
import PlayersTemplate from '../components/templates/PlayersTemplate';

import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducer';

const Players: React.FC = () => {
  const teamState = useSelector((state: AppState) => state.teams);

  return(
    <PlayersTemplate
    teamState={teamState}
    />
  );
}

export default Players;