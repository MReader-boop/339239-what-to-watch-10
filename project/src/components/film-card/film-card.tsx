import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

type FilmCardProps = {
  film: Film;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

function FilmCard({onMouseEnter, onMouseLeave, film}: FilmCardProps): JSX.Element {

  return(
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={film.card.posterPreview} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
