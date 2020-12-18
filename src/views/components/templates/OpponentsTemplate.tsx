import React from 'react';
import Link from '../atoms/Link';

const OpponentsTemplate: React.FC = () => {
  return(
    <>
      <h1>OpponentsTemplate</h1>
      <div>
        <Link to={`/opponents/new`}>
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

export default OpponentsTemplate;