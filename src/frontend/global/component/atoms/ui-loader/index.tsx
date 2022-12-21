import './index.css';

import { RotateSpinner } from 'react-spinners-kit';

import { useGlobalStore } from '../../../store';

const JSX = (props: any) => {
  const { isLoading }: any = useGlobalStore(['isLoading']);
  if (isLoading) {
    return (
      <>
        {props.children}
        <div className="HScreen BGLoaderOverlay flex items-center justify-center">
          <RotateSpinner size={60} color="white" className="" />
        </div>
      </>
    );
  }

  return <>{props.children}</>;
};

export default { JSX };