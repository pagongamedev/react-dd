import * as middlewareFirebase from './firebase';
import * as middlewareI18n from './i18n';

export const middlewareInit = ({ i18nList = [] }: { i18nList: any[] }) => {
  console.log('Middleware Init');
  middlewareI18n.init(
    {
      debug: true,
      fallbackLng: 'th',
    },
    i18nList,
  );

  // middlewareFirebase.init();
};
