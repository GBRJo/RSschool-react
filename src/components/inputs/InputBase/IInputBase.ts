export interface IInputBase {
  label?: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  error?: string;
  disabled?: boolean;
}
