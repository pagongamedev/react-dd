import { HelperI18Next } from 'universal-helper';

import P000Login from '../../domain/p00-000-login';
// import RouteRole from '../component/atoms/route-role';
// import RouteParent from './parent';
// import RouteTeacher from './teacher';

const i18nList: HelperI18Next.TypeI18NDomain[] = [
  P000Login.I18N,
  // ...RouteTeacher.i18nList,
  // ...RouteParent.i18nList,
];

// const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

// const router = createRouter({ routeTree });

const JSX = (/*props: any*/) => {
  return (
    <></>
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       index
    //       element={
    //         <RouteRole sRole="">
    //           <P000Login.JSX />
    //         </RouteRole>
    //       }
    //     />
    //     {RouteTeacher.JSX}
    //     {RouteParent.JSX}
    //     <Route path="*" element={<>Path Not Found</>}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default { JSX, i18nList };
