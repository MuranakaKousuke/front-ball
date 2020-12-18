import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import TeamEditTemplate from '../components/templates/TeamEditTemplate';

const TeamEdit: React.FC = () => {
  const teamState = useSelector((state: AppState) => state.team)

  return(
    <TeamEditTemplate
      teamState={teamState}
    />
  )
}

export default TeamEdit;