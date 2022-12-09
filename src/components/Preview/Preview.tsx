import { useEffect, useState } from 'react';

import { en } from '../../lang';
import { smallImg } from '../../App.css';
import { container } from './Preview.css';
import fallbackImage from './fallback.png';
import { ZoomableImage } from '../ZoomableImage';
import { label } from '../ImageSelect/ImageSelect.css';

type PreviewProps = {
  src: string;
  onImgLoad?: () => void;
  onImgError?: () => void;
};

export function Preview({ src, onImgLoad, onImgError }: PreviewProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  function onLoad() {
    if (imgSrc !== fallbackImage) {
      onImgLoad?.();
    }
  }

  function onError() {
    setImgSrc(fallbackImage);
    onImgError?.();
  }

  return (
    <div className={container}>
      <label className={label}>{en.common.preview}</label>
      <ZoomableImage
        src={imgSrc}
        className={smallImg}
        onLoad={onLoad}
        onError={onError}
        alt={en.common.nft}
      />
    </div>
  );
}
