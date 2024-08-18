import React, { ForwardedRef } from 'react';
import { InputBase } from '../InputBase/InputBase';
import { IPasswordInput } from './IPasswordInput';

export const PasswordInput = React.forwardRef<HTMLInputElement, IPasswordInput>(
  (
    {
      showPassword,
      oldPassword,
      newPassword,
      onOldPasswordChange,
      onNewPasswordChange,
      newPasswordError,
      showNewPassword,
      editMode,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    if (!editMode) {
      return (
        <div className="password">
          <InputBase
            {...props}
            type={showPassword ? 'text' : 'password'}
            ref={ref}
          />
        </div>
      );
    }

    return (
      <>
        <div className="password">
          <InputBase
            {...props}
            placeholder="old password"
            type={showPassword ? 'text' : 'password'}
            value={oldPassword || ''}
            onChange={onOldPasswordChange}
            ref={ref}
          />
        </div>
        {!props.disabled && editMode && (
          <div className="password">
            <InputBase
              {...props}
              placeholder="new password"
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword || ''}
              onChange={onNewPasswordChange}
              error={newPasswordError}
              ref={ref}
            />
          </div>
        )}
      </>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
