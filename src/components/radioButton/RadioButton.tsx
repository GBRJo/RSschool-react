import React, { FC } from 'react';

interface IRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export const RadioButton: FC<IRadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked = false,
  onChange,
  disabled = false,
  error, // Принимаем пропс ошибки
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="radio-button">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="radio-input"
      />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
