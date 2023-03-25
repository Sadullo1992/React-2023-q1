import { describe, it, vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Form display current form', () => {
    const setOrders = vitest.fn(() => {});
    render(<Form setOrders={setOrders} />);
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it('When first time click submit button, input error message will appear', () => {
    const setOrders = vitest.fn(() => {});
    const { getByRole } = render(<Form setOrders={setOrders} />);
    const btn = getByRole('button', { name: /Submit/i });
    fireEvent.click(btn);
    expect(
      screen.getByText(/Name is required and starts with capital letter!/i)
    ).toBeInTheDocument();
  });
});
