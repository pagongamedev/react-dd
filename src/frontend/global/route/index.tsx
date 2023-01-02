import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { helperI18Next } from 'universal-helper';

import P000Login from '../../domain/p000-login';
import P001Dashboard from '../../domain/p001-dashboard';
import P002ThreeJS from '../../domain/p002-threejs';
import P003ImpactJS from '../../domain/p003-impactjs';
import P004Menu from '../../domain/p004-menu';
import RoutePrivate from '../component/atoms/route-private';
import TemplateMobile from '../component/templates/template-mobile';
import { useStoreGlobalPersist } from '../store/persist';

const i18nList: helperI18Next.TypeI18NDomain[] = [
  P000Login.I18N,
  P001Dashboard.I18N,
  P002ThreeJS.I18N,
  P003ImpactJS.I18N,
  P004Menu.I18N,
];

const JSX = (props: any) => {
  const { userData }: any = useStoreGlobalPersist(['userData']);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={userData ? <Navigate replace to="/user" /> : <P000Login.JSX />}
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
          <Route path="dashboard" element={<P001Dashboard.JSX />} />
          <Route path="threejs" element={<P002ThreeJS.JSX />} />
          <Route path="impactjs" element={<P003ImpactJS.JSX />} />
          <Route path="menu" element={<P004Menu.JSX />} />
        </Route>
        <Route path="*" element={<div>URLs Not Fount</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default { i18nList, JSX };
