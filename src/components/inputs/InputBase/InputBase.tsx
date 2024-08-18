import { IInputBase } from './IInputBase';
import React, { ForwardedRef } from 'react';

export const InputBase = React.forwardRef<HTMLInputElement, IInputBase>(
  (
    { label, type, placeholder, value, onChange, id, name, error, disabled },
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <div className="input">
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
      />
      {error && <div className="error">{error}</div>}
    </div>
  ),
);

InputBase.displayName = 'InputBase';
