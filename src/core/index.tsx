import 'virtual:windi.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from '../frontend/global';
import { fixbugInit } from './fixbug';
import { middlewareInit } from './middleware';

fixbugInit();
middlewareInit({ i18nList: Main.i18nList });

const StrictMode = (props: { children: React.ReactNode }) => {
  if (import.meta.env.VITE_DEBUG_IS_STRICT_MODE == 'true') {
    console.log('Strict Mode');
    return <React.StrictMode>{props.children}</React.StrictMode>;
  }

  return <>{props.children}</>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Main.JSX />
  </StrictMode>,
);
