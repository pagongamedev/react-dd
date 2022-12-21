// import './index.css';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import TemplateMobile from '../../global/component/templates/template-mobile';
import { useGlobalStore } from '../../global/store';
import UIMock from './component/UIMock';
import initI18N from './i18n';

const i18nDomainName = 'dashboard';
const I18N = initI18N({ name: i18nDomainName });

const JSX = () => {
  const { setMenu }: any = useGlobalStore(['setMenu']);
  const { t, i18n } = useTranslation([i18nDomainName]);

  const onChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setMenu(t('header'), 0);
  };
  useEffect(() => {
    setMenu(t('header'), 0);
  }, []);
  return (
    <TemplateMobile.JSX>
      <div className="h-12 pb-0.5 w-full font-bold bg-primary-hover text-white my-auto text-center flex flex-row justify-center items-center gap-x-2 text-xl">
        <input
          type="radio"
          name="EN"
          value="en"
          checked={i18n.language === 'en'}
          onChange={() => onChangeLang('en')}
        />
        EN
        <input
          type="radio"
          name="TH"
          value="th"
          checked={i18n.language === 'th'}
          onChange={() => onChangeLang('th')}
        />
        TH
      </div>
      <div className="flex-1 overflow-x-auto">
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
        <UIMock.JSX />
      </div>
    </TemplateMobile.JSX>
  );
};

export default { I18N, JSX };
