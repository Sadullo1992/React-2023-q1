import { describe, it, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Form display current form', () => {
    const setOrders = vitest.fn(() => {});
    render(<Form setOrders={setOrders} />);
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
