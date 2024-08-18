import { forwardRef, ChangeEvent } from 'react';

interface IRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, IRadioButtonProps>(
  function RadioButton(
    {
      id,
      name,
      value,
      label,
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      error,
    },
    ref,
  ) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    };

    return (
      <div className="radio-button">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          className="radio-input"
          ref={ref}
        />
        <label htmlFor={id} className="radio-label">
          {label}
        </label>
        {error && <div className="error-message">{error}</div>}
      </div>
    );
  },
);
