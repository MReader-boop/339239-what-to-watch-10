import { useEffect, useRef } from 'react';
import {Film} from '../../types/film';

type PreviewPlayerProps = {
  film: Film;
}

function PreviewPlayer({film}: PreviewPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(
      () => {
        if(videoRef.current === null) {
          throw new Error();
        } else {videoRef.current.play();}
      }, 1000
    );
  }
  );

  return(
    <video
      src={film.card.videoPreview}
      poster={film.card.posterPreview}
      ref={videoRef}
      width="280"
      height="175"
      muted
    />
  );
}

export default PreviewPlayer;
