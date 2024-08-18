import React from 'react';
import { InputBase } from '../InputBase/InputBase';
import { IPasswordInput } from './IPasswordInput';

export const PasswordInput: React.FC<IPasswordInput> = function ({
  showPassword,
  oldPassword,
  newPassword,
  onOldPasswordChange,
  onNewPasswordChange,
  newPasswordError,
  showNewPassword,
  ...props
}) {
  if (!props.editMode) {
    return (
      <>
        <div className="password">
          <InputBase {...props} type={showPassword ? 'text' : 'password'} />
        </div>
      </>
    );
  }

  return (
    <>
      <>
        <div className="password">
          <InputBase
            {...props}
            placeholder={!props.disabled ? 'old password' : '********'}
            type={showPassword ? 'text' : 'password'}
            value={oldPassword as string}
            onChange={onOldPasswordChange as () => void}
          />
        </div>
      </>
      {!props.disabled && props.editMode && (
        <>
          <div className="password">
            <InputBase
              {...props}
              placeholder="new password"
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword as string}
              onChange={onNewPasswordChange as () => void}
              error={newPasswordError}
            />
          </div>
        </>
      )}
    </>
  );
};
