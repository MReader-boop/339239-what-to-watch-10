import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
};

function FilmList({films}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map(({card}, i) => {
        const key = `${i} - ${card.name}`;
        return <FilmCard posterPreview={card.posterPreview} name={card.name} key={key}/>;
      })}
    </div>
  );
}

export default FilmList;
