import { forwardRef } from 'react';
import { InputBase } from '../InputBase/InputBase';
import { IInputBase } from '../InputBase/IInputBase';

export const TextInput = forwardRef<HTMLInputElement, IInputBase>(function (
  { ...props },
  ref,
) {
  return (
    <div className="input__wrapper">
      <InputBase {...props} type="text" ref={ref} />
    </div>
  );
});
