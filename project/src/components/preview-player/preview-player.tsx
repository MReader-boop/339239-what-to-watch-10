import { useEffect, useRef } from 'react';

type PreviewPlayerProps = {
  videoPreview: string;
  posterPreview: string;
}

function PreviewPlayer({videoPreview, posterPreview}: PreviewPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const PREVIEW_DELAY = 1000;

  useEffect(() => {
    setTimeout(
      () => {
        if(videoRef.current) {
          videoRef.current.play();
        }
      }, PREVIEW_DELAY
    );
  }
  );

  return(
    <video
      src={videoPreview}
      poster={posterPreview}
      ref={videoRef}
      width="280"
      height="175"
      muted
    />
  );
}

export default PreviewPlayer;
