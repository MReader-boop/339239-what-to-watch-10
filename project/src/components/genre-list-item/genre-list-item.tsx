import {Filters} from '../../const';

type GenreListItemProps = {
  currentFilter: string;
  filter: string;
};

const getFilterName = (filter: string): string => {
  switch(filter) {
    default:
      return 'All genres';
    case Filters.Comedies:
      return 'Comedies';
    case Filters.Crime:
      return 'Crime';
    case Filters.Documentary:
      return 'Documentary';
    case Filters.Dramas:
      return 'Dramas';
    case Filters.Horror:
      return 'Horror';
    case Filters.KidsAndFamily:
      return 'Kids & Family';
    case Filters.Romance:
      return 'Romance';
    case Filters.SciFi:
      return 'Sci-Fi';
    case Filters.Thrillers:
      return 'Thrillers';
  }
};

function GenreListItem({currentFilter, filter}: GenreListItemProps): JSX.Element {
  const filterName = getFilterName(filter);
  return(
    <li className={`catalog__genres-item ${filter === currentFilter ? 'catalog__genres-item--active' : ''}`}>
      <a href="#" className="catalog__genres-link">{filterName}</a>
    </li>
  );
}

export default GenreListItem;
