import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { container, name, input } from './TextInput.css';

type TextInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export function TextInput({
  label,
  value,
  onChange,
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
        id={label}
        className={input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}
