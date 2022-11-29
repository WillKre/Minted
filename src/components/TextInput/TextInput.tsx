import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { container, name, input } from './TextInput.css';

type TextInputProps = {
  label: string;
  value: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
};

export function TextInput({
  label,
  value,
  onChange,
  autoFocus,
  placeholder,
}: TextInputProps) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={container}>
      <label htmlFor={label} className={name}>
        {label}
      </label>

      <input
        required
        id={label}
        type="text"
        value={value}
        className={input}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
