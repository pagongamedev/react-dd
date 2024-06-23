import './index.css';

import { RotateSpinner } from 'react-spinners-kit';

import StoreGlobal from '../../../store/global';

const UILoader = (props: any) => {
  const { isLoading } = StoreGlobal.GetState(['isLoading']);
  if (isLoading) {
    return (
      <>
        {props.children}
        <div className="uh-h-screen BGLoaderOverlay flex items-center justify-center">
          <RotateSpinner size={60} color="white" className="" />
        </div>
      </>
    );
  }

  return <>{props.children}</>;
};

export default UILoader;
