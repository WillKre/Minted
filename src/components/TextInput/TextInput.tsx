import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { labelActionButton } from '../../App.css';
import { container, name, input, labelAndAction } from './TextInput.css';

type TextInputProps = {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export function TextInput({
  label,
  value,
  action,
  onChange,
  disabled,
  autoFocus,
  placeholder,
}: TextInputProps) {
  function handleOnChange({ target }: ChangeEvent<HTMLInputElement>) {
    onChange(target.value);
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
        autoComplete="off"
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
