import { img } from '../../../App.css';
import { label } from '../ImageSelect.css';
import { container } from './Preview.css';

type PreviewProps = {
  src: string;
};

export function Preview({ src }: PreviewProps) {
  return (
    <div className={container}>
      <label className={label}>Preview</label>
      <img
        src={src}
        className={img}
        onLoad={() => {
          // Revoke data URI after the image is loaded
          URL.revokeObjectURL(src);
        }}
      />
    </div>
  );
}
