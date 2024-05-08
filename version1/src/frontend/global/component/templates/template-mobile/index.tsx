import { useTranslation } from 'react-i18next';
import { BiCube, BiGame, BiHome, BiMenu } from 'react-icons/bi';
import { MdAddLocationAlt } from 'react-icons/md';

import { GetMethodStoreGlobal, GetStoreGlobal, UseStoreGlobal } from '../../../store';
import LinkSafe from '../../atoms/link-safe';

const UITemplateMobile = (props: any) => {
  const { t, i18n } = useTranslation(['main']);
  const { sI18NDomainName } = GetStoreGlobal();

  const { menu } = UseStoreGlobal(['menu']);
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  const { setMenu } = GetMethodStoreGlobal();
  const onChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setMenu(t('header', { ns: sI18NDomainName }), 0);
  };

  const defaultRoute = '/user/dashboard';
  return (
    <>
      <div className="uh-h-screen from-grad-default-white-from to-grad-default-white-to m-0 bg-gradient-to-b">
        <div className="uh-h-screen divide-y-1.5 mx-auto flex max-w-lg flex-col">
          {menuUIIsShow.isShowHeader && (
            <div className="text-primary text-primary my-auto flex h-12 w-full flex-row items-center justify-center bg-white pb-0.5 text-center text-2xl font-bold">
              <div className="mt-1 flex-1 truncate text-ellipsis">{menu.sHeaderName}</div>
            </div>
          )}

          {menuUIIsShow.isShowI18n && (
            <div className="bg-primary-hover my-auto flex h-12 w-full flex-row items-center justify-center gap-x-2 pb-0.5 text-center text-xl font-bold text-white">
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
          <div className="flex flex-1 flex-col overflow-clip">{props.children}</div>
          {menuUIIsShow.isShowFooter && (
            <div className="h-15 flex w-full flex-row items-center justify-around bg-white px-5 pb-0.5">
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
