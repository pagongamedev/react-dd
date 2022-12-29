import { BiCube, BiGame, BiHome, BiMenu } from 'react-icons/bi';

import { useStoreGlobal } from '../../../store';
import LinkSafe from '../../atoms/link-safe';

const JSX = (props: any) => {
  const { menu }: any = useStoreGlobal(['menu']);

  const defaultRoute = '/user/dashboard';
  return (
    <>
      <div className="HScreen m-0 bg-gradient-to-b from-grad-default-white-from to-grad-default-white-to">
        <div className="HScreen max-w-lg flex flex-col divide-y-1.5 mx-auto">
          <div className="h-12 pb-0.5 text-primary w-full text-2xl font-bold bg-white text-primary my-auto text-center flex flex-row justify-center items-center">
            <div className="flex-1 mt-1 truncate text-ellipsis">{menu.sHeaderName}</div>
          </div>
          <div className="flex-1 flex flex-col overflow-clip">{props.children}</div>
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
              disabled={menu.iIconID === 1}
              to="/user/threejs"
            >
              <BiCube
                className={menu.iIconID === 2 ? 'text-primary-select' : 'text-primary'}
                size="2.3em"
              />
            </LinkSafe>
            <LinkSafe
              className="flex justify-items-center"
              disabled={menu.iIconID === 1}
              to="/user/impactjs"
            >
              <BiGame
                className={menu.iIconID === 3 ? 'text-primary-select' : 'text-primary'}
                size="2.3em"
              />
            </LinkSafe>
            <LinkSafe
              className="flex justify-items-center"
              disabled={menu.iIconID === 1}
              to="/user/menu"
            >
              <BiMenu
                className={menu.iIconID === 4 ? 'text-primary-select' : 'text-primary'}
                size="2.7em"
              />
            </LinkSafe>
          </div>
        </div>
      </div>
    </>
  );
};

export default { JSX };
