import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useGlobalStore } from '../../../store';

const JSX = (props: any) => {
  const { menu }: any = useGlobalStore(['menu']);

  return (
    <>
      <div className="HScreen m-0 bg-gradient-to-b from-grad-default-white-from to-grad-default-white-to">
        <div className="HScreen max-w-lg flex flex-col divide-y-1.5 mx-auto">
          <div className="h-12 pb-0.5 text-primary w-full text-2xl font-bold bg-white text-primary my-auto text-center flex flex-row justify-center items-center">
            <div className="flex-1 mt-1 truncate text-ellipsis">{menu.sHeaderName}</div>
          </div>
          <div className="flex-1 flex flex-col overflow-clip">{props.children}</div>
          <div className="h-15 pb-0.5 bg-white w-full flex flex-row justify-end items-center px-5">
            <Link
              className="flex justify-items-center"
              to={menu.iIconID === 1 ? '/dashboard' : '/menu'}
            >
              <MdMenu
                className={menu.iIconID === 1 ? 'text-primary-select' : 'text-primary'}
                size="2.7em"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default { JSX };
