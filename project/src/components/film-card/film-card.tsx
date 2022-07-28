type FilmCardProps = {
  imgSrc: string;
  name: string;
}

function FilmCard(filmInfo: FilmCardProps): JSX.Element {
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmInfo.imgSrc} alt={filmInfo.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmInfo.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;