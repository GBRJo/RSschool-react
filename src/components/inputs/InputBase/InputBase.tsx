import { FC } from 'react';
import { IInputBase } from './IInputBase';

export const InputBase: FC<IInputBase> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  id,
  name,
  error,
  disabled,
}) => (
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
    />
    {error && <div className="error">{error}</div>}
  </div>
);
