import { IInputBase } from '../InputBase/IInputBase';

export interface IPasswordInput extends IInputBase {
  showPassword?: boolean;
  oldPassword?: string;
  newPassword?: string;
  onOldPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNewPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newPasswordError?: string;
  showNewPassword?: boolean;
  editMode?: boolean;
}
