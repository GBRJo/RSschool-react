import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchInput, SearchInputProps } from './SearchInput';

describe('SearchInput component', () => {
  const defaultProps: SearchInputProps = {
    value: '',
    onChange: vi.fn(),
    name: 'search',
  };

  it('renders without crashing', () => {
    render(<SearchInput {...defaultProps} />);
  });

  it('renders the label if provided', () => {
    render(<SearchInput {...defaultProps} label="Search Label" />);
    expect(screen.getByText('Search Label')).toBeInTheDocument();
  });

  it('renders the placeholder if provided', () => {
    render(<SearchInput {...defaultProps} placeholder="Search..." />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('displays the correct value', () => {
    render(<SearchInput {...defaultProps} value="Test Value" />);
    expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
  });

  it('calls onChange when the input value changes', () => {
    const handleChange = vi.fn();
    render(<SearchInput {...defaultProps} onChange={handleChange} />);

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'New Value' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown when a key is pressed', () => {
    const handleKeyDown = vi.fn();
    render(<SearchInput {...defaultProps} onKeyDown={handleKeyDown} />);

    fireEvent.keyDown(screen.getByRole('searchbox'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
});
