import React from 'react';
import Link from '../atoms/Link';

const ScoresTemplate: React.FC = () => {
  return(
    <>
      <h1>ScoresTemplate</h1>
      <div>
        <Link to={`/`}>
          <button>新規登録</button>
        </Link>
      </div>
    </>
  );
}

export default ScoresTemplate;