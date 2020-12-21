import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducer';
import TeamEditTemplate from '../components/templates/TeamEditTemplate';

const TeamEdit: React.FC<{myteamId: number}> = ({
  myteamId
}) => {
  const teamState = useSelector((state: AppState) => state.teams.byId)[myteamId];

  return(
    <TeamEditTemplate
      teamState={teamState}
    />
  )
}

export default TeamEdit;