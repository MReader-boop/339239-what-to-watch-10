import React, {useState} from 'react';

type FilmCardProps = {
  posterPreview: string;
  videoPreview: string;
  name: string;
}

function FilmCard({posterPreview, name, videoPreview}: FilmCardProps): JSX.Element {
  const [isPreviewed, setIsPreviewed] = useState(false);
  return(
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPreviewed(true)}
      onMouseLeave={() => setIsPreviewed(false)}
    >
      {
        isPreviewed ? (
          <div className="small-film-card__image">
            <img src={posterPreview} alt={name} width="280" height="175" />
          </div>
        ) : (
          <React.Fragment>
            <div className="small-film-card__image">
              <img src={posterPreview} alt={name} width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">{name}</a>
            </h3>
          </React.Fragment>
        )
      }
    </article>
  );
}

export default FilmCard;
