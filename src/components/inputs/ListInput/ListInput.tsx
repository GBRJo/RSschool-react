import { forwardRef, ChangeEvent, ForwardedRef } from 'react';
import { IListInput } from './IListInput';

export const ListInput = forwardRef<HTMLInputElement, IListInput>(function (
  { label, placeholder, value, onChange, name, error, options, id },
  ref: ForwardedRef<HTMLInputElement>,
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
        id={id || name}
        list={`${name}-list`}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value} // Передача значения
        onChange={handleChange} // Обработка изменения
        ref={ref} // Передача ref
      />
      <datalist id={`${name}-list`}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
      {error && <div className="error">{error}</div>}
    </div>
  );
});
