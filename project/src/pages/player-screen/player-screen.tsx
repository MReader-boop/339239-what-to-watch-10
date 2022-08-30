import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoutes } from '../../const';
import {Film} from '../../types/film';

const styleLeft = {
  left: '30%'
};

type PlayerScreenProps = {
  films: Film[];
};

function PlayerScreen({films}: PlayerScreenProps): JSX.Element {
  const {id} = useParams();

  if (id === undefined) {
    return(<Navigate to='/*' />);
  }
  const currentFilm = films.find((film) => film.id === +id);

  if(currentFilm === undefined){
    return(<Navigate to='/*' />);
  }
  return(
    <div className="player">
      <video src="#" className="player__video" poster={currentFilm.backgroundImage}></video>

      <Link to={AppRoutes.Main}>
        <button type="button" className="player__exit">Exit</button>
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={styleLeft}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
