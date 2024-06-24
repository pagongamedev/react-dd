// import { useState } from 'react';
import './css/index.css';
import './css/font.css';

import {
  // createRootRoute,
  createRouter,
  Link,
  // Outlet,
  RouterProvider,
} from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import { ReactNode } from 'react';
import { add } from 'skillvir-game-core';
import { GameCore, IGameLoop, JSXEngineThree } from 'skillvir-game-core/engine/three';
import { type TypeI18NDomain } from 'skillvir-universal-helper/i18next';
import * as THREE from 'three';

import HelperTanStackRouter from '../../core/helper/tanstack-router';
import AtomUILoader from './component/atom/ui-loader';
import initI18N from './i18n';
import Route from './route';
import StoreGame from './store/game';
// i18n
const i18nList: TypeI18NDomain[] = [initI18N({ name: 'main' }), ...Route.i18nList];
const JSXRouterRoot = (props: { children?: JSX.Element }) => {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      {props.children}
    </>
  );
};

HelperTanStackRouter.RouteRootCreate({
  Template: JSXRouterRoot,
});

const indexRoute = HelperTanStackRouter.RouteCreate({
  path: '/',
  component: function Index() {
    const { gameCore } = StoreGame.GetState(['gameCore']);
    return (
      <div className="p-2">
        <h3>
          Welcome Home!
          {add(1, 2)}
        </h3>
        <div className="bg-red-500 h-screen">
          <JSXEngineThree className="h-full" gameCore={gameCore} />
        </div>
      </div>
    );
  },
});

const aboutRoute = HelperTanStackRouter.RouteCreate({
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

HelperTanStackRouter.RouteRootAddChildren([indexRoute, aboutRoute]);
// const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

class JSX extends React.Component<any, any> {
  render(): ReactNode {
    return (
      <div className="Prompt">
        <AtomUILoader>
          <HelperTanStackRouter.RouterProvider />
        </AtomUILoader>
      </div>
    );
  }
}

export default { JSX, i18nList };
