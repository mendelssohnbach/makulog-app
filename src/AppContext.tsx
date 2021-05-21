// アプリ全体で共有する 2 つの文字列データを宣言
// username/apiToken
import * as React from 'react';

// AppContext が保持する値の型
export interface AppContextType {
  username: string;
  apiToken: string;
  setUsername: (username: string) => void;
  setApiToken: (apiToken: string) => void;
}

// AppContext の生成
export const AppContext = React.createContext<AppContextType>({
  username: 'Default username', // デフォルト値
  apiToken: 'Default apiToken', // デフォルト値
  setUsername: (username: string) => {}, // ダミー関数
  setApiToken: (apiToken: string) => {}, // ダミー関数
});

// AppContext にセッター関数を登録するためのコンポーネント
export const AppContextProvider: React.FC = ({ children }) => {
  // デフォルト値の取得用
  const context: AppContextType = React.useContext(AppContext);

  // ステートオブジェクト作成
  const [username, setUsername] = React.useState(context.username);
  const [apiToken, setApiToken] = React.useState(context.apiToken);

  // 下位コンポーネントへ渡す Context
  const newContext: AppContextType = {
    username,
    setUsername,
    apiToken,
    setApiToken,
  };

  return <AppContext.Provider value={newContext}>{children}</AppContext.Provider>;
};
