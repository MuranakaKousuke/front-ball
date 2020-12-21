import React from 'react';
import Link from '../atoms/Link';

import { teamsState } from '../../../store/teams/reducer';
type TemplateProps = teamsState;

const PlayersTemplate: React.FC<{teamState: TemplateProps}> = ({
  teamState,
}) => {
  return(
    <>
      <h1>PlayersTemplate</h1>
    </>
  );
}

export default PlayersTemplate;