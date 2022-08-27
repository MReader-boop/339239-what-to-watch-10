import {Film} from '../../types/film';

type TabsOverviewProps = {
  currentFilm: Film;
}

function TabsOverview({currentFilm}: TabsOverviewProps): JSX.Element {
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.description.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{currentFilm.description.votes} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {currentFilm.description.description}

        <p className="film-card__director"><strong>Director: {currentFilm.description.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {currentFilm.description.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default TabsOverview;
