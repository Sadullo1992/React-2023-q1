import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Confirmation from './Confirmation';

describe('Confirmation', () => {
  it('Confirmation display text message', () => {
    render(<Confirmation />);
    expect(screen.getByText(/Data has been saved!/i)).toBeInTheDocument();
  });
});
