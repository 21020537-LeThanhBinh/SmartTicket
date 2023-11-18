'use client';

import { FocusEventHandler } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  onClick?: () => void;
  onBlur?: FocusEventHandler<any>;
  multiline?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
}

const TextInput: React.FC<InputProps> = ({
  id,
  placeholder,
  type = "text",
  disabled,
  required,
  onChange,
  value,
  onClick,
  onBlur,
  multiline,
  autoFocus,
  maxLength
}) => {
  const className = `
    peer w-full px-3 py-2 font-light bg-white border rounded-md outline-none transition 
    disabled:opacity-70 disabled:cursor-not-allowed
    placeholder:text-sm
  `

  return (
    <>
      {multiline ? (
        <TextareaAutosize
          onClick={onClick}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          id={id}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onBlur={onBlur}
          className={className}
          minRows={3}
          autoFocus={autoFocus}
          maxLength={maxLength}
        />
      ) : (
        <input
          onClick={onClick}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          id={id}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          autoFocus={autoFocus}
          className={className}
          maxLength={maxLength}
        />
      )}
    </>
  );
}

export default TextInput;