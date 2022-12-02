import { useEffect, useState } from 'react';

import { en } from '../../lang';
import { img } from '../../App.css';
import { container } from './Preview.css';
import { label } from '../ImageSelect/ImageSelect.css';

type PreviewProps = {
  src: string;
  onImgError?: (bool: boolean) => void;
};

const fallback = 'https://demofree.sirv.com/nope-not-here.jpg';

export function Preview({ src, onImgError }: PreviewProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  function onLoad() {
    onImgError?.(false);
  }

  function onError() {
    setImgSrc(fallback);
    onImgError?.(true);
  }

  return (
    <div className={container}>
      <label className={label}>{en.common.preview}</label>
      <img src={imgSrc} className={img} onLoad={onLoad} onError={onError} />
    </div>
  );
}
