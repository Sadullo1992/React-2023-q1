import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import ProductItem from './ProductItem';
import heartLine from '../assets/icons/heart-3-line.svg';
import heartFill from '../assets/icons/heart-3-fill.svg';
import { Product } from './Products';

const mockProduct: Product = {
  id: '123',
  price: 111,
  title: 'Product Title',
  description: 'lorem ipsum doler',
};

describe('ProductItem', () => {
  it('ProductItem display correct product', () => {
    render(<ProductItem index={0} product={mockProduct} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Product Title');
  });

  it('ProductItem displays product index', () => {
    const index = 0;
    const { getByAltText } = render(<ProductItem index={index} product={mockProduct} />);
    const img = getByAltText('card') as HTMLImageElement;
    expect(img.src).toEqual(`https://source.unsplash.com/random?sig=${index}`);
  });

  it('heart button should displays line heart and fill heart, if heart button is clicked  ', () => {
    const { getByTestId, getByAltText } = render(<ProductItem index={0} product={mockProduct} />);
    const heartBtn = getByTestId('heart-btn');
    const img = getByAltText('heart') as HTMLImageElement;
    fireEvent.click(heartBtn);
    expect(img.src.includes(heartFill)).toBeTruthy();
    fireEvent.click(heartBtn);
    expect(img.src.includes(heartLine)).toBeTruthy();
  });
});
