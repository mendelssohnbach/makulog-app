import * as React from 'react';
import { Child } from './Child';
import { MyContext } from './MyContext';

const App: React.FC = () => {
  const [message, setMessage] = React.useState(React.useContext(MyContext));
  console.log(`App component: ${message}`);

  return (
    // 初回アクセス時はMyContextコンポーネントのデフォルト値を表示
    <MyContext.Provider value={message}>
      <Child />
      <br />
      {/* ボタンがクリック時 'New message' が
      setMessageに渡され表示が更新される */}
      <button onClick={() => setMessage('New message')}>Change</button>
    </MyContext.Provider>
  );
};

export default App;
