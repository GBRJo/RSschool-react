import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NotFound } from './NotFound';

describe('NotFound Component', () => {
  it('renders the 404 message', () => {
    render(<NotFound />);
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
  });

  it('renders the description message', () => {
    render(<NotFound />);
    expect(
      screen.getByText('The page you are looking for does not exist.'),
    ).toBeInTheDocument();
  });

  it('does not render any other text', () => {
    render(<NotFound />);
    expect(screen.queryByText('Some other text')).not.toBeInTheDocument();
  });
});
