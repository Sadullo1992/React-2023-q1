import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithProviders from '../utils/test-utils';

import Products from '../components/Products';

describe('Products', () => {
  it('Products component shows no product content, if empty array recieved from props', () => {
    renderWithProviders(<Products />);
    expect(screen.getByText(/Sorry, We could not find any photos.../i)).toBeInTheDocument();
  });
});
