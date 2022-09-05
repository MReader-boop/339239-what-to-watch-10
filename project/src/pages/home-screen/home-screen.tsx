import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMore from '../../components/show-more/show-more';
import { AuthStatus, Filters } from '../../const';
import {Film} from '../../types/film';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PageHeader from '../../components/page-header/page-header';
import { changeFilmFavoriteStatusAction, fetchFavoritesAction } from '../../services/api-actions';


const getFilteredFilms = (films: Film[], filter: string) => {
  if (filter === Filters.AllGenres) {
    return films;
  } else {
    return films.filter((film) => film.genre === filter);
  }
};

type HomeScreenProps = {
  films: Film[];
  filterList: string[];
};

function HomeScreen({films, filterList}: HomeScreenProps): JSX.Element | null {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.currentFilter);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const favorites = useAppSelector((store) => store.favorites);
  const INITIALLY_RENDERED_FILM_AMOUNT = 8;
  const [renderedFilmAmount, setRenderedFilmAmount] = useState<number>(INITIALLY_RENDERED_FILM_AMOUNT);

  useEffect(() => {
    if(authStatus === AuthStatus.Authed){
      dispatch(fetchFavoritesAction());
    }
  }, [authStatus]);

  if (isDataLoading || promoFilm === null) {
    return null;
  }
  const filteredFilms = getFilteredFilms(films, currentFilter);
  const displayShowMoreButton = filteredFilms.length > 8 && renderedFilmAmount < filteredFilms.length;

  const handleMyListButtonClick = () => {
    dispatch(changeFilmFavoriteStatusAction(promoFilm));
  };

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader authStatus={authStatus}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`/player/${promoFilm.id}`)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                {authStatus === AuthStatus.Authed ?
                  <button onClick={handleMyListButtonClick} className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref={promoFilm.isFavorite ? '#in-list' : '#add'}></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{favorites.length}</span>
                  </button> :
                  ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList onChange={() => {
            setRenderedFilmAmount(INITIALLY_RENDERED_FILM_AMOUNT);
          }} currentFilter={currentFilter} filterList={filterList}
          />
          <FilmList films={filteredFilms.slice(0, renderedFilmAmount)}/>

          {displayShowMoreButton &&
            <ShowMore onClick={() => {
              const diff = filteredFilms.length - renderedFilmAmount;
              const newRenderedFilms =
                renderedFilmAmount + ((diff) > INITIALLY_RENDERED_FILM_AMOUNT ? INITIALLY_RENDERED_FILM_AMOUNT : diff);
              setRenderedFilmAmount(newRenderedFilms);
            }}
            />}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomeScreen;
