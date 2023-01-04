import { helperI18Next } from 'universal-helper';

// import { middlewareFirebaseInit } from './firebase';

export const middlewareInit = ({
  i18nList = [],
}: {
  i18nList: helperI18Next.TypeI18NDomain[];
}) => {
  // console.log('Middleware Init');
  helperI18Next.MiddlewareInit(
    {
      debug: import.meta.env.VITE_DEBUG_MIDDLEWARE_I18NEXT == 'true',
      fallbackLng: 'th',
    },
    i18nList,
  );

  //  middlewareFirebaseInit();
  // middlewareChartJSInit
};
