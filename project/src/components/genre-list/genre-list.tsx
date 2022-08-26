import {Filters} from '../../const';
import GenreListItem from '../genre-list-item/genre-list-item';

type GenreListProps = {
  currentFilter: string;
  filterList: string[];
};

function GenreList({currentFilter, filterList}: GenreListProps): JSX.Element {
  return(
    <ul className="catalog__genres-list">
      <GenreListItem currentFilter={currentFilter} filter={Filters.AllGenres}/>
      {filterList.map((filter, index) => {
        const key = `${filter} - ${index}`;
        return <GenreListItem currentFilter={currentFilter} filter={filter} key={key}/>;
      })}
    </ul>
  );
}

export default GenreList;
