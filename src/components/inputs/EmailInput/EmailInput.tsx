import React, { ForwardedRef } from 'react';
import { IInputBase } from '../InputBase/IInputBase';
import { InputBase } from '../InputBase/InputBase';

export const EmailInput = React.forwardRef<
  HTMLInputElement,
  Omit<IInputBase, 'type'>
>(({ label, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="input__wrapper">
      <InputBase {...props} ref={ref} type="email" id="email" label={label} />
    </div>
  );
});

EmailInput.displayName = 'EmailInput';
