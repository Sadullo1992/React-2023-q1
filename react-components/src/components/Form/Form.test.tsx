import { describe, it, vitest } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Form display current form', () => {
    const setOrders = vitest.fn(() => {});
    render(<Form setOrders={setOrders} />);
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it('Error has occured in name input, if input does not fill', async () => {
    const setOrders = vitest.fn(() => {});
    const { getByRole } = render(<Form setOrders={setOrders} />);
    const btn = getByRole('button', { name: /Submit/i });

    fireEvent.click(btn);

    await waitFor(() => expect(screen.getByText(/Name is required!/)).toBeInTheDocument());
  });

  it('Checking error for first capital letter', async () => {
    const setOrders = vitest.fn(() => {});
    const { getByPlaceholderText, getByRole } = render(<Form setOrders={setOrders} />);
    const btn = getByRole('button', { name: /Submit/i });
    const nameInput = getByPlaceholderText(/Enter your name/);

    fireEvent.change(nameInput, { target: { value: 'smith' } });

    fireEvent.click(btn);

    await waitFor(() =>
      expect(screen.getByText(/Name should start with capital letter!/)).toBeInTheDocument()
    );
  });

  it('Checking error for at least 3 character', async () => {
    const setOrders = vitest.fn(() => {});
    const { getByPlaceholderText, getByRole } = render(<Form setOrders={setOrders} />);
    const btn = getByRole('button', { name: /Submit/i });
    const nameInput = getByPlaceholderText(/Enter your name/);

    fireEvent.change(nameInput, { target: { value: 'Gi' } });

    fireEvent.click(btn);

    await waitFor(() => expect(screen.getByText(/At least 3 letter/)).toBeInTheDocument());
  });

  it('Checking an error for delivery date starts from tomorrow', async () => {
    const setOrders = vitest.fn(() => {});
    const { getByTestId, getByRole } = render(<Form setOrders={setOrders} />);
    const btn = getByRole('button', { name: /Submit/i });
    const dateInput = getByTestId('date-input');

    fireEvent.change(dateInput, { target: { value: '2023-03-09' } });

    fireEvent.click(btn);

    await waitFor(() =>
      expect(screen.getByText(/The delivery starts from tomorrow!/)).toBeInTheDocument()
    );
  });
});
