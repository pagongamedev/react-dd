import { Navigate } from 'react-router-dom';

/* eslint-disable react/display-name */
export default ({ isAuth, to, children }: any) => {
  return isAuth ? children : <Navigate to={to || '/'} replace />;
};
