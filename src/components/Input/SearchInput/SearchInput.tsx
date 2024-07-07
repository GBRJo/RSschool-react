import React, { ChangeEvent, KeyboardEvent } from 'react';

interface SearchInputProps {
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
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export class SearchInput extends React.Component<SearchInputProps> {
  render() {
    const { label, placeholder, value, onChange, name, onKeyDown } = this.props;

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
  }
}
