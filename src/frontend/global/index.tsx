// import { useState } from 'react';
import './index.css';

import React from 'react';
import { ReactNode } from 'react';

import UILoader from './component/UILoader';
import { Context } from './context';
import initI18N from './i18n';
import Route from './route';

const i18nList: any[] = [initI18N({ name: 'main' }), ...Route.i18nList];
class JSX extends React.Component<any, any> {
  render(): ReactNode {
    return (
      <div>
        <Context>
          <UILoader.JSX>
            <Route.JSX />
          </UILoader.JSX>
        </Context>
      </div>
    );
  }
}

export default { i18nList, JSX };
