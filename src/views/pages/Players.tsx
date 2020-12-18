import React from 'react';
import PlayersTemplate from '../components/templates/PlayersTemplate';

import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

const Players: React.FC = () => {
  const teamState = useSelector((state: AppState) => state.team);

  return(
    <PlayersTemplate
    teamState={teamState}
    />
  );
}

export default Players;