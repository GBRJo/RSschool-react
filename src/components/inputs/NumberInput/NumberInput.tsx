import { INumberInputProps } from './INumberInput';
import { forwardRef, ChangeEvent } from 'react';

export const NumberInput = forwardRef<HTMLInputElement, INumberInputProps>(
  function NumberInput(
    {
      min,
      max,
      step,
      label,
      placeholder,
      value,
      defaultValue,
      onChange,
      id,
      name,
      error,
    },
    ref,
  ) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className="input">
        {label && <label htmlFor={id || name}>{label}</label>}
        <input
          type="number"
          placeholder={placeholder}
          value={value} // Для контролируемого режима
          defaultValue={defaultValue} // Для неконтролируемого режима
          onChange={handleChange}
          name={name}
          id={id || name}
          min={min}
          max={max}
          step={step}
          ref={ref}
        />
        {error && <div className="error">{error}</div>}
      </div>
    );
  },
);
