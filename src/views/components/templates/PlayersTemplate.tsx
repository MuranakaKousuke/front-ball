import React from 'react';
import Link from '../atoms/Link';

import { teamState } from '../../../store/team/reducer';
type TemplateProps = teamState;

const PlayersTemplate: React.FC<{teamState: TemplateProps}> = ({
  teamState,
}) => {
  return(
    <>
      <h1>PlayersTemplate</h1>
      <div>
        <Link to={`/teams/${teamState.id}/players/new`}>
          <button>新規登録</button>
        </Link>
      </div>
      <div>
        <Link to={`/`}>
          <button>変更</button>
        </Link>
      </div>
    </>
  );
}

export default PlayersTemplate;