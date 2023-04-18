import { describe, it } from 'vitest';
import { fireEvent } from '@testing-library/react';

import renderWithProviders from '../utils/test-utils';

import Search from './Search';

describe('Search', () => {
  it('Search input update changes and when I press search btn to start searching', () => {
    const { queryByPlaceholderText, getByRole } = renderWithProviders(<Search />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);
  });
});
