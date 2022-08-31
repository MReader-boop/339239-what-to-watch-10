import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../services/api-actions';
import {setError} from '../../store/action';
import {AuthData} from '../../types/auth-data';

function SignInScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector((store) => store.error);

  const [authData, setAuthData] = useState<{
    email: string | undefined;
    password: string | undefined;
  }>({
    email: undefined,
    password: undefined,
  });

  const onSubmit = (authenticationData: AuthData) => {
    dispatch(loginAction(authenticationData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (authData.email !== undefined && authData.password !== undefined) {
      dispatch(setError(null));
      onSubmit({
        email: authData.email,
        password: authData.password,
      });
      navigate(AppRoutes.Main);
    }
  };

  const handleEmailChange = (evt: any) => {
    setAuthData({...authData,
      email: evt.target.value});
  };

  const handlePasswordChange = (evt: any) => {
    setAuthData({...authData,
      password: evt.target.value});
  };

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoutes.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {error ?
            <div className="sign-in__message">
              <p>{error}</p>
            </div> : ''}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={authData.email}
                onChange={handleEmailChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={authData.password}
                onChange={handlePasswordChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
                Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoutes.Main} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInScreen;
