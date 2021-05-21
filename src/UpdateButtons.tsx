// AppContext が保持するデータを変更するための2つのボタンを配置
// Change username/Change apiToken
import * as React from 'react';
import { AppContext, AppContextType } from './AppContext';

export const UpdateButtons: React.FC = () => {
  // AppContext.Provider から提供される Context データを参照
  const context: AppContextType = React.useContext(AppContext);

  const handleChangeUsername = () => {
    // context更新
    context.setUsername('New username');
  };
  const handleChangeApiToken = () => {
    // context更新
    context.setApiToken('New apiToken');
  };

  return (
    <>
      <h2>UpdateButtons</h2>
      <button onClick={handleChangeUsername}>Change username</button>
      <button onClick={handleChangeApiToken}>Change apiToken</button>
    </>
  );
};
