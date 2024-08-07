import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorBoundary } from './error';
import React from 'react';

// Mock component to simulate an error
const ProblematicComponent = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  it('renders fallback UI when an error is caught', () => {
    const fallbackUI = <div>Something went wrong.</div>;

    render(
      <ErrorBoundary fallbackUI={fallbackUI}>
        <ProblematicComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });

  it('renders children when no error is caught', () => {
    const fallbackUI = <div>Something went wrong.</div>;
    const normalUI = <div>All is good.</div>;

    render(<ErrorBoundary fallbackUI={fallbackUI}>{normalUI}</ErrorBoundary>);

    expect(screen.getByText('All is good.')).toBeInTheDocument();
  });
});
