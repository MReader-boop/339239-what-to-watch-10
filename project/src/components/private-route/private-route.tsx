import {Navigate} from 'react-router-dom';
import {AuthStatus, AppRoutes} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute({children, authStatus}: PrivateRouteProps): JSX.Element {
  return(
    authStatus === AuthStatus.Authed ?
      children :
      <Navigate to = {AppRoutes.SignIn}/>
  );
}

export default PrivateRoute;
