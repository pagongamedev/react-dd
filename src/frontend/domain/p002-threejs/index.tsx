// import './index.css';

import { useEffect } from 'react';

// import { useTranslation } from 'react-i18next';
import Template from '../../global/component/templates/template-mobile';
import { useGlobalStore } from '../../global/store';
import initI18N from './i18n';
// import
const i18nDomainName = 'threejs';
const I18N = initI18N({ name: i18nDomainName });

const JSX = () => {
  const { setMenu }: any = useGlobalStore(['setMenu']);
  // const { t } = useTranslation([i18nDomainName]);

  useEffect(() => {
    setMenu('three.js', 2);
  }, []);
  return <Template.JSX></Template.JSX>;
};

export default { I18N, JSX };
