// import './index.css';

import { useEffect } from 'react';
import { WaitForMilliSecond } from 'universal-helper/src/helper/time';

import scriptImport from '../../global/component/atoms/script-import';
// import script1 from '../../../../lib/game';
// import script2 from '../../../../lib/game/main.js';
// import { useTranslation } from 'react-i18next';
import Template from '../../global/component/templates/template-mobile';
import { getMethodStoreGlobal } from '../../global/store';
import initI18N from './i18n';
// import * from '../../../../src/interactive/domain/impact-js/'
// import
const i18nDomainName = 'impactjs';
const I18N = initI18N({ name: i18nDomainName });

const canvasGame = document.createElement('canvas');
canvasGame.id = 'canvas';
// const canvasGame = <canvas id="canvas"></canvas>;
const script1 = document.createElement('script');
const script2 = document.createElement('script');

const JSX = () => {
  const { setMenu } = getMethodStoreGlobal();

  // const { t } = useTranslation([i18nDomainName]);
  // scriptImport('lib/impact/impact.js');
  // scriptImport('lib/game/main.js');

  const loadScript = async () => {
    if (script1.src != '') {
      return;
    }
    script1.src = 'lib/impact/impact.js';
    script1.async = true;
    document.body.appendChild(script1);
    await WaitForMilliSecond(10);
    if (script2.src != '') {
      return;
    }
    script2.src = 'src/interactive/domain/impact-js/game/main.js';
    script2.async = true;
    document.body.appendChild(script2);
    await WaitForMilliSecond(10);
  };

  useEffect(() => {
    setMenu('impact.js', 3);
    loadScript();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // console.log(ig);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // ig.system.startRunLoop();

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // ig.system.stopRunLoop();
    };
  }, []);

  return (
    <Template.JSX>
      <div
        className="flex-auto"
        ref={(mount) => {
          mount?.append(canvasGame);
        }}
      ></div>
    </Template.JSX>
  );
};

export default { I18N, JSX };
