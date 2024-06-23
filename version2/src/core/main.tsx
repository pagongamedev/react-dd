import './css/index.css';

import ReactDOM from 'react-dom/client';

import Main from '../frontend/global';
import { FixbugInit } from './fixbug/index.ts';
import { HelperStrictMode } from './helper/strict-mode.tsx';
import { MiddlewareInit } from './middleware/index.ts';

FixbugInit();
MiddlewareInit();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelperStrictMode>
    <Main.JSX />
  </HelperStrictMode>,
);
