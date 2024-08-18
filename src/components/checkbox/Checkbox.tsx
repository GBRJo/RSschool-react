import {
  forwardRef,
  useImperativeHandle,
  useRef,
  ChangeEvent,
  ForwardedRef,
} from 'react';
import { ICheckboxProps } from './ICheckboxProps';

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  function Checkbox(
    {
      id,
      label,
      checked, // Значение не по умолчанию, так как это может быть неконтролируемый компонент
      onChange,
      disabled = false,
      error,
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.checked);
      }
    };

    return (
      <div className="checkbox">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={id}
            checked={checked} // Проверка на существование пропса checked
            disabled={disabled}
            onChange={handleChange}
            ref={inputRef}
            className="checkbox-input"
          />
          <label htmlFor={id} className="checkbox-label">
            {label}
          </label>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    );
  },
);
