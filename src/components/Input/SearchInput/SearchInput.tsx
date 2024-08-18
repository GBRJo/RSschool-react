import { ChangeEvent } from 'react';

export interface SearchInputProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  disabled?: boolean;
  editMode?: boolean;
  onEdit?: () => void;
  error?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  onKeyDown,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
