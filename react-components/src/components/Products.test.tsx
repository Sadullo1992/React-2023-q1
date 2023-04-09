import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Products from './Products';

import mockPhotos from '../data/unsplash.json';

describe('Products', () => {
  it('Products component shows no product content, if empty array recieved from props', () => {
    render(<Products products={[]} />);
    expect(screen.getByText(/Sorry, We could not find any photos.../i)).toBeInTheDocument();
  });

  it('Products component shows all photo cards, if mock photos array recieved from props', () => {
    render(<Products products={mockPhotos} />);
    expect(screen.getByText(/Likes: 984/)).toBeInTheDocument();
  });
});
