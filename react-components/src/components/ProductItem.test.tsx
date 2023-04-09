import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import ProductItem from './ProductItem';
import heartLine from '../assets/icons/heart-3-line.svg';
import heartFill from '../assets/icons/heart-3-fill.svg';
import { IPhoto } from '../types/photo.model';

import photos from '../data/unsplash.json';

const mockPhoto: IPhoto = photos[0];

describe('ProductItem', () => {
  it('ProductItem display correct product', () => {
    render(<ProductItem product={mockPhoto} />);
    expect(screen.getByText(/Likes: 984/)).toBeInTheDocument();
  });

  it('heart button should displays line heart and fill heart, if heart button is clicked  ', () => {
    const { getByTestId, getByAltText } = render(<ProductItem product={mockPhoto} />);
    const heartBtn = getByTestId('heart-btn');
    const img = getByAltText('heart') as HTMLImageElement;
    fireEvent.click(heartBtn);
    expect(img.src.includes(heartFill)).toBeTruthy();
    fireEvent.click(heartBtn);
    expect(img.src.includes(heartLine)).toBeTruthy();
  });

  it('Modal is shown, if MORE INFO ABOUT PHOTO button is clicked ', () => {
    const { getByRole, getByText } = render(<ProductItem product={mockPhoto} />);
    const btn = getByRole('button', { name: /More info about photo/ });
    fireEvent.click(btn);
    expect(getByText(/Photo owner/)).toBeInTheDocument();
  });
});
