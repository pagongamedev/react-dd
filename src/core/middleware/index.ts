import { helperI18Next } from 'universal-helper';

import * as middlewareFirebase from './firebase';

export const middlewareInit = ({ i18nList = [] }: { i18nList: any[] }) => {
  console.log('Middleware Init');
  helperI18Next.MiddlewareInit(
    {
      debug: true,
      fallbackLng: 'th',
    },
    i18nList,
  );

  // middlewareFirebase.Init();
};
