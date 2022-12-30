import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { helperI18Next } from 'universal-helper';

import p000Login from '../../domain/p000-login';
import p001Dashboard from '../../domain/p001-dashboard';
import p002ThreeJS from '../../domain/p002-threejs';
import p003ImpactJS from '../../domain/p003-impactjs';
import p004Menu from '../../domain/p004-menu';
import RoutePrivate from '../component/atoms/route-private';
import TemplateMobile from '../component/templates/template-mobile';
import { useStoreGlobalPersist } from '../store/persist';

const i18nList: helperI18Next.TypeI18NDomain[] = [
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
        <Route
          index
          element={userData ? <Navigate replace to="/user" /> : <p000Login.JSX />}
        />
        {/* <Route path="/" element={<p000Login.JSX />} /> */}
        <Route
          path="user"
          element={
            <RoutePrivate isAuth={userData}>
              <TemplateMobile.JSX>
                <Outlet />
              </TemplateMobile.JSX>
            </RoutePrivate>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<p001Dashboard.JSX />} />
          <Route path="threejs" element={<p002ThreeJS.JSX />} />
          <Route path="impactjs" element={<p003ImpactJS.JSX />} />
          <Route path="menu" element={<p004Menu.JSX />} />
        </Route>
        <Route path="*" element={<div>URLs Not Fount</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default { i18nList, JSX };
