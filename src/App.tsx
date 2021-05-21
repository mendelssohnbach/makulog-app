// https://maku.blog/p/qoz8fow/
import * as React from 'react';
import { AppContextProvider } from './AppContext';
import { UserInfo } from './UserInfo';
import { UpdateButtons } from './UpdateButtons';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <UserInfo />
      <UpdateButtons />
    </AppContextProvider>
  );
};

export default App;
