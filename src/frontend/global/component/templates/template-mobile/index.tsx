import { useTranslation } from 'react-i18next';
import { BiCube, BiGame, BiHome, BiMenu } from 'react-icons/bi';
import { MdAddLocationAlt } from 'react-icons/md';

import { getMethodStoreGlobal, getStoreGlobal, useStoreGlobal } from '../../../store';
import LinkSafe from '../../atoms/link-safe';

const UITemplateMobile = (props: any) => {
  const { t, i18n } = useTranslation(['main']);
  const { sI18NDomainName } = getStoreGlobal();

  const { menu }: any = useStoreGlobal(['menu']);
  const { menuUIIsShow }: any = useStoreGlobal(['menuUIIsShow']);

  const { setMenu } = getMethodStoreGlobal();
  const onChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setMenu(t('header', { ns: sI18NDomainName }), 0);
  };

  const defaultRoute = '/user/dashboard';
  return (
    <>
      <div className="HScreen m-0 bg-gradient-to-b from-grad-default-white-from to-grad-default-white-to">
        <div className="HScreen max-w-lg flex flex-col divide-y-1.5 mx-auto">
          {menuUIIsShow.isShowHeader && (
            <div className="h-12 pb-0.5 text-primary w-full text-2xl font-bold bg-white text-primary my-auto text-center flex flex-row justify-center items-center">
              <div className="flex-1 mt-1 truncate text-ellipsis">{menu.sHeaderName}</div>
            </div>
          )}

          {menuUIIsShow.isShowI18n && (
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
          )}
          <div className="flex-1 flex flex-col overflow-clip">{props.children}</div>
          {menuUIIsShow.isShowFooter && (
            <div className="h-15 pb-0.5 bg-white w-full flex flex-row justify-around items-center px-5">
              <LinkSafe
                className="flex justify-items-center"
                disabled={menu.iIconID === 1}
                to="/user/dashboard"
              >
                <BiHome
                  className={menu.iIconID === 1 ? 'text-primary-select' : 'text-primary'}
                  size="2.3em"
                />
              </LinkSafe>
              <LinkSafe
                className="flex justify-items-center"
                disabled={menu.iIconID === 2}
                to="/user/threejs"
              >
                <BiCube
                  className={menu.iIconID === 2 ? 'text-primary-select' : 'text-primary'}
                  size="2.3em"
                />
              </LinkSafe>
              <LinkSafe
                className="flex justify-items-center"
                disabled={menu.iIconID === 3}
                to="/user/impactjs"
              >
                <BiGame
                  className={menu.iIconID === 3 ? 'text-primary-select' : 'text-primary'}
                  size="2.3em"
                />
              </LinkSafe>
              <LinkSafe
                className="flex justify-items-center"
                disabled={menu.iIconID === 4}
                to="/user/threejsgo"
              >
                <MdAddLocationAlt
                  className={menu.iIconID === 4 ? 'text-primary-select' : 'text-primary'}
                  size="2.3em"
                />
              </LinkSafe>
              <LinkSafe
                className="flex justify-items-center"
                disabled={menu.iIconID === 5}
                to="/user/menu"
              >
                <BiMenu
                  className={menu.iIconID === 5 ? 'text-primary-select' : 'text-primary'}
                  size="2.7em"
                />
              </LinkSafe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UITemplateMobile;
