import { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  label,
  container,
  baseStyle,
  rejectStyle,
  acceptStyle,
  focusedStyle,
  instructions,
  labelAndAction,
} from './ImageSelect.css';
import { en } from '../../lang';
import { Preview } from '../Preview';
import { showToast } from '../../utils/showToast';
import { labelActionButton } from '../../App.css';

type ImageSelectProps = {
  action?: {
    label: string;
    onClick: () => void;
  };
  onChange: (file: File) => void;
};

export function ImageSelect({ action, onChange }: ImageSelectProps) {
  const [preview, setPreview] = useState('');
  const {
    isFocused,
    isDragAccept,
    isDragReject,
    getRootProps,
    acceptedFiles,
    getInputProps,
    fileRejections,
  } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(() => {
    if (fileRejections.length) {
      showToast(fileRejections[0].errors[0].message, '🏞');
    }

    if (acceptedFiles.length === 1) {
      setPreview(URL.createObjectURL(acceptedFiles[0]));
      onChange(acceptedFiles[0]);
    }
  }, [acceptedFiles, fileRejections]);

  return (
    <div className={container}>
      <div className={labelAndAction}>
        <label htmlFor={label} className={label}>
          {en.common.image}
        </label>
        {action && (
          <button
            type="button"
            onClick={action.onClick}
            className={labelActionButton}
          >
            {action.label}
          </button>
        )}
      </div>

      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className={instructions}>{en.common.dragNDrop}</p>
      </div>

      {!!acceptedFiles.length && <Preview src={preview} />}
    </div>
  );
}