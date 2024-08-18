import React from 'react';
import { InputBase } from '../InputBase/InputBase';
import { IInputBase } from '../InputBase/IInputBase';

export const TextInput: React.FC<IInputBase> = function ({ ...props }) {
  return (
    <div className="input__wrapper">
      <InputBase {...props} type="text" />
    </div>
  );
};
