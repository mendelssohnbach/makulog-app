// AppContext が保持するユーザーデータを単純に表示します。
import * as React from 'react';
import { AppContext, AppContextType } from './AppContext';

export const UserInfo: React.FC = () => {
  // AppContext.Provider から提供される Context データを参照
  const context: AppContextType = React.useContext(AppContext);

  return (
    <>
      <h2>UserInfo</h2>
      <ul>
        <li>
          <b>username:</b> {context.username}
        </li>
        <li>
          <b>apiToken:</b> {context.apiToken}
        </li>
      </ul>
    </>
  );
};
