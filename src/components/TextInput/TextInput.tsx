import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { labelActionButton } from '../../App.css';
import { container, name, input, labelAndAction } from './TextInput.css';

type TextInputProps = {
  label: string;
  value: string;
  placeholder: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export function TextInput({
  label,
  value,
  onChange,
  disabled,
  autoFocus,
  placeholder,
  action,
}: TextInputProps) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={container}>
      <div className={labelAndAction}>
        <label htmlFor={label} className={name}>
          {label}
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

      <input
        required
        id={label}
        type="text"
        value={value}
        className={input}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
