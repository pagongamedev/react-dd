import { BrowserRouter, Route, Routes } from 'react-router-dom';

import p000Login from '../../domain/p000-login';
import p001Dashboard from '../../domain/p001-dashboard';
import p002Menu from '../../domain/p002-menu';
import RoutePrivate from '../component/atoms/route-private';
import { useGlobalStorePersist } from '../store';

const i18nList: any[] = [p000Login.I18N, p001Dashboard.I18N, p002Menu.I18N];

const JSX = (props: any) => {
  const { userData }: any = useGlobalStorePersist(['userData']);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p000Login.JSX />} />
        {/* <Route path="/" element={<p000Login.JSX />} /> */}
        <Route
          path="/dashboard"
          element={
            <RoutePrivate isAuth={userData}>
              <p001Dashboard.JSX />{' '}
            </RoutePrivate>
          }
        />
        <Route
          path="/menu"
          element={
            <RoutePrivate isAuth={userData}>
              <p002Menu.JSX />
            </RoutePrivate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default { i18nList, JSX };
