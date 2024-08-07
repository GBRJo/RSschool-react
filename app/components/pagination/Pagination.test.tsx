// Pagination.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('renders the current page and total pages correctly', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
    );

    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
  });

  it('calls onPageChange with the correct page number when clicking next', () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />,
    );

    const nextButton = screen.getByLabelText('Next');
    fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with the correct page number when clicking previous', () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />,
    );

    const previousButton = screen.getByLabelText('Previous');
    fireEvent.click(previousButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('disables the previous button on the first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />,
    );

    const previousButton = screen.getByLabelText('Previous');
    expect(previousButton).toBeDisabled();
  });

  it('disables the next button on the last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />,
    );

    const nextButton = screen.getByLabelText('Next');
    expect(nextButton).toBeDisabled();
  });
});
