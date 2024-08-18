import { ChangeEvent } from 'react';

export interface INumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  placeholder?: string;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  error?: string;
  defaultValue?: number;
}
