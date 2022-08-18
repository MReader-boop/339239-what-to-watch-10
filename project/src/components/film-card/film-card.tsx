import {Link} from 'react-router-dom';

type FilmCardProps = {
  posterPreview: string;
  videoPreview: string;
  name: string;
  id: number;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

function FilmCard({onMouseEnter, onMouseLeave, posterPreview, name, id, videoPreview}: FilmCardProps): JSX.Element {
  return(
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={posterPreview} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
