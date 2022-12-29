import { BrowserRouter, Route, Routes } from 'react-router-dom';

import p000Login from '../../domain/p000-login';
import p001Dashboard from '../../domain/p001-dashboard';
import p002ThreeJS from '../../domain/p002-threejs';
import p003ImpactJS from '../../domain/p003-impactjs';
import p004Menu from '../../domain/p004-menu';
import RoutePrivate from '../component/atoms/route-private';
import { useStoreGlobalPersist } from '../store';

const i18nList: any[] = [
  p000Login.I18N,
  p001Dashboard.I18N,
  p002ThreeJS.I18N,
  p003ImpactJS.I18N,
  p004Menu.I18N,
];

const JSX = (props: any) => {
  const { userData }: any = useStoreGlobalPersist(['userData']);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p000Login.JSX />} />
        {/* <Route path="/" element={<p000Login.JSX />} /> */}
        <Route
          path="/dashboard"
          element={
            <RoutePrivate isAuth={userData}>
              <p001Dashboard.JSX />
            </RoutePrivate>
          }
        />
        <Route
          path="/threejs"
          element={
            <RoutePrivate isAuth={userData}>
              <p002ThreeJS.JSX />
            </RoutePrivate>
          }
        />
        <Route
          path="/impactjs"
          element={
            <RoutePrivate isAuth={userData}>
              <p003ImpactJS.JSX />{' '}
            </RoutePrivate>
          }
        />
        <Route
          path="/menu"
          element={
            <RoutePrivate isAuth={userData}>
              <p004Menu.JSX />
            </RoutePrivate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default { i18nList, JSX };
