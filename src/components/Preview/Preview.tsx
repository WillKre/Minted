import { useEffect, useState } from 'react';

import { en } from '../../lang';
import { img } from '../../App.css';
import { container } from './Preview.css';
import fallbackImage from './fallback.png';
import { label } from '../ImageSelect/ImageSelect.css';

type PreviewProps = {
  src: string;
  onImgLoad?: () => void;
  onImgError?: () => void;
};

export function Preview({ src, onImgLoad, onImgError }: PreviewProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

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
      <img src={imgSrc} className={img} onLoad={onLoad} onError={onError} />
    </div>
  );
}
