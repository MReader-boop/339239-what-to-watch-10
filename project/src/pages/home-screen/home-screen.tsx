import FilmList from '../../components/film-list/film-list';
import { AppRoutes } from '../../const';
import {Film} from '../../types/film';
import { useNavigate } from 'react-router-dom';
import GenreList from '../../components/genre-list/genre-list';
import {Filters} from '../../const';
import { useAppSelector } from '../../hooks';

const getFilteredFilms = (films: Film[], filter: string) => {
  if (filter === Filters.AllGenres) {
    return films;
  } else {
    return films.filter((film) => film.description.genre === filter);
  }
};

type HomeScreenProps = {
  films: Film[];
  filterList: string[];
};

function HomeScreen({films, filterList}: HomeScreenProps): JSX.Element | null {
  const navigate = useNavigate();
  const currentFilter = useAppSelector((state) => state.currentFilter);

  if (films.length === 0) {
    return null;
  }
  const filteredFilms = getFilteredFilms(films, currentFilter);
  const selectedFilm = films[0];

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={selectedFilm.description.poster} alt={selectedFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={selectedFilm.description.poster} alt={`${selectedFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{selectedFilm.description.genre}</span>
                <span className="film-card__year">{selectedFilm.description.year}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`/player/${selectedFilm.id}`)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button onClick={() => navigate(AppRoutes.MyList)} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList currentFilter={currentFilter} filterList={filterList}/>
          <FilmList films={filteredFilms}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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
