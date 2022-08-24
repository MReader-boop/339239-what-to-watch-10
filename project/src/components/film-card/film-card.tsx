import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import PreviewPlayer from '../preview-player/preview-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

function FilmCard({onMouseEnter, onMouseLeave, isActive, film}: FilmCardProps): JSX.Element {

  return(
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        {isActive ?
          <PreviewPlayer videoPreview={film.card.videoPreview} posterPreview={film.card.posterPreview}/> :
          <img src={film.card.posterPreview} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
