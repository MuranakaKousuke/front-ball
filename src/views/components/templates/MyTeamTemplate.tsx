import React from 'react';
import Link from '../atoms/Link';

import { teamState } from '../../../store/team/reducer';
type TemplateProps = teamState;

const MyTeamTemplate: React.FC<{teamState: TemplateProps}> = ({
  teamState,
}) => {
  return(
    <>
      <h1>マイチーム</h1>
      <div>
        <Link to={`/teams/${teamState.id}/edit`}>
          <button>チーム編集</button>
        </Link>
      </div>
      <div>
        <Link to={`/teams/${teamState.id}/players`}>
          <button>選手一覧</button>
        </Link>
      </div>
      <div>
        <Link to={`/teams/${teamState.id}/scores`}>
          <button>対戦成績</button>
        </Link>
      </div>
      <div>
        <Link to={`/opponents`}>
          <button>対戦相手一覧</button>
        </Link>
      </div>
      <div>
        <Link to={`/recruits`}>
          <button>選手募集一覧</button>
        </Link>
      </div>
    </>
  );
}

export default MyTeamTemplate;