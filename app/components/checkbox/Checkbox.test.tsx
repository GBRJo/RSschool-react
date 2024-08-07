import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { ThemeProvider } from '../../hooks/ThemeContext';

describe('Checkbox component', () => {
  it('renders the checkbox with the correct label and attributes', () => {
    render(
      <ThemeProvider>
        <Checkbox
          id="test-checkbox"
          label="Test Checkbox"
          checked={false}
          onChange={() => {}}
          disabled={false}
        />
      </ThemeProvider>,
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
});
