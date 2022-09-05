import { Link, useParams, useNavigate } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import Tabs from '../../components/tabs/tabs';
import FilmList from '../../components/film-list/film-list';
import PageHeader from '../../components/page-header/page-header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrentFilmAction, fetchSimilarFilmsAction, changeFilmFavoriteStatusAction, fetchFavoritesAction, fetchReviewsAction } from '../../services/api-actions';
import { useEffect } from 'react';

function FilmScreen(): JSX.Element | null {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favorites = useAppSelector((store) => store.favorites);
  const similarFilms = useAppSelector((store) => store.similarFilmsList);
  const currentFilm = useAppSelector((store) => store.currentFilm);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchReviewsAction(id));
  }, [id]);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [currentFilm]);

  if(currentFilm === null || similarFilms === []){
    return(null);
  }

  const handleMyListButtonClick = () => {
    dispatch(changeFilmFavoriteStatusAction(currentFilm));
  };

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader authStatus={authStatus}/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`/player/${currentFilm.id}`)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {authStatus === AuthStatus.Authed ?
                  <button onClick={handleMyListButtonClick} className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref={currentFilm.isFavorite ? '#in-list' : '#add'}></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{favorites.length}</span>
                  </button> :
                  ''}
                <button onClick={() => navigate(AppRoutes.AddReview)} className="btn film-card__button">Add review</button>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>

            <Tabs film={currentFilm}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms}/>
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
    </>
  );
}

export default FilmScreen;
