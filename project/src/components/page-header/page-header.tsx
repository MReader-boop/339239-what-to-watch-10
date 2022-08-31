import { Link } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../services/api-actions';

type PageHeaderProps = {
  authStatus: AuthStatus;
}

function PageHeader({authStatus}: PageHeaderProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSignOut = (evt: any) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return(
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={AppRoutes.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {
        authStatus !== AuthStatus.Authed ?
          <div className="user-block">
            <Link to={AppRoutes.SignIn} className="user-block__link">Sign in</Link>
          </div> :
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to='/' onClick={handleSignOut} className="user-block__link">Sign out</Link>
            </li>
          </ul>
      }

    </header>
  );
}

export default PageHeader;
