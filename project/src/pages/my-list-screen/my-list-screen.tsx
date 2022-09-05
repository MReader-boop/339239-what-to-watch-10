import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import FilmList from '../../components/film-list/film-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesAction, logoutAction } from '../../services/api-actions';
import { useEffect } from 'react';

function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleSignOut = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, []);

  const myList = useAppSelector((store) => store.favorites);

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

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myList.length}</span></h1>
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
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={myList}/>

      </section>

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

export default MyListScreen;
