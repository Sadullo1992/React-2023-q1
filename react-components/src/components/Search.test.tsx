import { describe, it, vitest } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  it('Search input update changes and when I press search btn to start searching', () => {
    const onSearch = vitest.fn(() => {});
    const { queryByPlaceholderText, getByRole } = render(<Search onSearch={onSearch} />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);
    // to call onSearch function
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});
