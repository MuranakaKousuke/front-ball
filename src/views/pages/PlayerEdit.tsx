import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducer';

import PlayerEditTemplate from '../components/templates/PlayerEditTemplate';

const PlayerEdit: React.FC<{myteamId: number}> = ({
  myteamId
}) => {
  const teamState = useSelector((state: AppState) => state.teams.byId)[myteamId];

  return(
    <PlayerEditTemplate />
  );
}

export default PlayerEdit;