import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Products from './Products';

describe('Products', () => {
  it('Products component shows no product content, if empty array recieved from props', () => {
    render(<Products products={[]} />);
    expect(screen.getByText(/Sorry, We could not find any products.../i)).toBeInTheDocument();
  });
});
