import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { container } from './ZoomableImage.css';

type ZoomableImageProps = {
  alt: string;
  src?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
};

export function ZoomableImage({
  src,
  alt,
  onLoad,
  onError,
  className,
}: ZoomableImageProps) {
  return (
    <div className={container}>
      <Zoom>
        <img
          src={src}
          alt={alt}
          onLoad={onLoad}
          onError={onError}
          className={className}
        />
      </Zoom>
    </div>
  );
}
