import * as React from 'react';
import { MyContext } from './MyContext';

const App: React.FC = () => {
  // MyContext.tsのcreateContextで設定した値 `Default message
  const message: string = React.useContext(MyContext);

  return <div>{message}</div>;
};

export default App;
