import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  it('renders the button with the correct attributes', () => {
    render(
      <Button
        ariaLabel="test-button"
        imgSrc="test-image.png"
        imgAlt="Test Image"
        className="test-class"
        disabled={false}
        type="submit"
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /test-button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button test-class');
    expect(buttonElement).not.toBeDisabled();
    expect(buttonElement).toHaveAttribute('type', 'submit');

    const imgElement = screen.getByAltText('Test Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'test-image.png');
  });

  it('renders the button as disabled when the disabled prop is true', () => {
    render(
      <Button
        ariaLabel="test-button"
        imgSrc="test-image.png"
        imgAlt="Test Image"
        disabled={true}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /test-button/i });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('disabled');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <Button
        ariaLabel="test-button"
        imgSrc="test-image.png"
        imgAlt="Test Image"
        onClick={handleClick}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /test-button/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with text', () => {
    render(<Button ariaLabel="test-button" text="Click me" />);

    const buttonElement = screen.getByRole('button', { name: /test-button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders the button with text and image', () => {
    render(
      <Button
        ariaLabel="test-button"
        imgSrc="test-image.png"
        imgAlt="Test Image"
        text="Click me"
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /test-button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();

    const imgElement = screen.getByAltText('Test Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'test-image.png');
  });
});
