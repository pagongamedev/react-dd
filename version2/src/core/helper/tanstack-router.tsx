import {
  AnyRoute,
  createRootRoute,
  createRoute,
  createRouter,
  //   Link,
  Outlet,
  RootRoute,
  RouterProvider,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

// route

let routeRoot: RootRoute = createRootRoute({
  component: () => <></>,
});

const HelperTanStackRouterRoot = (props: {
  Template?: React.FC<{ children?: JSX.Element }>;
}) => {
  let JSXPayload = <Outlet />;
  if (props.Template) {
    JSXPayload = (
      <props.Template>
        <Outlet />
      </props.Template>
    );
  }
  return (
    <>
      {JSXPayload} <TanStackRouterDevtools />
    </>
  );
};

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
// const routeTree = routeRoot.addChildren([]);
let router = createRouter({});

const HelperTanStackRouter: {
  // RouteRoot
  RouteRootGet(): RootRoute;
  RouteRootCreate(props: { Template?: React.FC }): RootRoute;
  RouteRootAddChildren(routeList: AnyRoute[]): void;
  // Route
  RouteCreate: (props: {
    path: string;
    component: React.FC;
    routeParent?: AnyRoute;
  }) => AnyRoute;
  RouterProvider: React.FC;
} = {
  // Route Root
  RouteRootGet: function () {
    return routeRoot;
  },
  RouteRootCreate: function (props: { Template?: React.FC }) {
    routeRoot = createRootRoute({
      component: () => <HelperTanStackRouterRoot Template={props.Template} />,
    });

    return routeRoot;
  },
  RouteRootAddChildren: function (routeList: AnyRoute[]) {
    const routeTree = routeRoot.addChildren(routeList);
    router = createRouter({ routeTree });
  },
  // Route
  RouteCreate: function (props: {
    path: string;
    component: React.FC;
    routeParent?: AnyRoute;
  }) {
    return createRoute({
      getParentRoute: () => props.routeParent || routeRoot,
      path: props.path,
      component: props.component,
    });
  },
  RouterProvider: () => <RouterProvider router={router} />,
};

export default HelperTanStackRouter;
