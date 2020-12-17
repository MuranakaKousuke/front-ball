import React from 'react';

const MyTeamTemplate: React.FC = () => {
  return(
    <>
      <h1>マイチーム</h1>
      <div>
        <button>チーム編集</button>
      </div>
      <div>
        <button>選手一覧</button>
      </div>
      <div>
        <button>対戦成績</button>
      </div>
    </>
  );
}

export default MyTeamTemplate;