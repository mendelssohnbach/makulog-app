import * as React from 'react';

export const MyContext: React.Context<string> = React.createContext<string>('Hello message'); // createContextとして `Hello message` を設定
