import React from 'react';
import Link from '../atoms/Link';

const RecruitsTemplate: React.FC = () => {
  return(
    <>
      <h1>RecruitsTemplate</h1>
      <div>
        <Link to={`/recruits/new`}>
          <button>新規登録</button>
        </Link>
      </div>
    </>
  );
}

export default RecruitsTemplate;