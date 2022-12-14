import { BrowserRouter, Route, Routes } from 'react-router-dom';

import p000Onboard from '../../domain/p000-onboard';
import p001Zustand from '../../domain/p001-zustand';
import p002ZustandHelper from '../../domain/p002-zustand-helper';

const i18nList: any[] = [];

const JSX = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p000Onboard.JSX />} />
        <Route path="/zustand" element={<p001Zustand.JSX />} />
        <Route path="/zustand-helper" element={<p002ZustandHelper.JSX />} />
      </Routes>
    </BrowserRouter>
  );
};

export default { i18nList, JSX };
