import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  it('renders the checkbox with the correct label and attributes', () => {
    render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        onChange={() => {}}
        disabled={false}
      />,
    );

    const checkboxElement = screen.getByRole('checkbox', {
      name: /test checkbox/i,
    });
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).toHaveAttribute('id', 'test-checkbox');
    expect(checkboxElement).not.toBeChecked();
    expect(checkboxElement).not.toBeDisabled();

    const labelElement = screen.getByLabelText('Test Checkbox');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders the checkbox as checked when the checked prop is true', () => {
    render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={true}
        onChange={() => {}}
      />,
    );

    const checkboxElement = screen.getByRole('checkbox', {
      name: /test checkbox/i,
    });
    expect(checkboxElement).toBeChecked();
  });

  it('renders the checkbox as disabled when the disabled prop is true', () => {
    render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        onChange={() => {}}
        disabled={true}
      />,
    );

    const checkboxElement = screen.getByRole('checkbox', {
      name: /test checkbox/i,
    });
    expect(checkboxElement).toBeDisabled();
  });

  it('calls the onChange handler with the correct value when the checkbox is clicked', () => {
    const handleChange = vi.fn();
    render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        onChange={handleChange}
      />,
    );

    const checkboxElement = screen.getByRole('checkbox', {
      name: /test checkbox/i,
    });
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('calls the onChange handler with the correct value when the checkbox is clicked twice', () => {
    const handleChange = vi.fn();
    render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={true}
        onChange={handleChange}
      />,
    );

    const checkboxElement = screen.getByRole('checkbox', {
      name: /test checkbox/i,
    });
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
