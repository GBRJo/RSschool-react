import React from 'react';

interface ICheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  id: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  disabled,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox">
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
  );
};
