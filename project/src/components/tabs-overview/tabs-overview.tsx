import {Film} from '../../types/film';

type TabsOverviewProps = {
  film: Film;
}

function TabsOverview({film}: TabsOverviewProps): JSX.Element {
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.description.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.description.votes} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description.description}

        <p className="film-card__director"><strong>Director: {film.description.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.description.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default TabsOverview;
