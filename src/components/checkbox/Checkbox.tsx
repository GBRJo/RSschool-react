import React, { FC } from 'react';
import { ICheckboxProps } from './ICheckboxProps';

export const Checkbox: FC<ICheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled,
  error,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox">
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="checkbox-input"
          id={id}
        />
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
