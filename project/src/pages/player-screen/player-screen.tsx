import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrentFilmAction } from '../../services/api-actions';

const styleLeft = {
  left: '30%'
};

function PlayerScreen(): JSX.Element | null {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector((store) => store.currentFilm);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState({
    isPlaying: false,
  });

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(id));
  }, [id]);

  if(currentFilm === null){
    return(<Navigate to='/*' />);
  }

  const onPlayButtonClick = () => {
    if(videoRef.current !== null) {
      if(videoState.isPlaying) {
        setVideoState({...videoState, isPlaying: false});
        videoRef.current.pause();
      } else {
        setVideoState({...videoState, isPlaying: true});
        videoRef.current.play();
      }

    }
  };

  return(
    <div className="player">
      <video ref={videoRef} src={currentFilm.videoLink} className="player__video" poster={currentFilm.backgroundImage}></video>

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
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={videoState.isPlaying ? '#pause' : '#play-s'}></use>
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
