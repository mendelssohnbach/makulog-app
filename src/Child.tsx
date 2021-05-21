import * as React from 'react';
import { MyContext } from './MyContext';

export const Child: React.FC = () => {
  const message = React.useContext(MyContext);
  console.log(`Child component: ${message}`);

  // MyContextコンポーネントの内容を表示
  return <b>{message}</b>;
};
