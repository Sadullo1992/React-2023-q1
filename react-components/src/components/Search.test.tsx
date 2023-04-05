import { describe, it, vitest } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  it('Search input update changes and on searching return the value', () => {
    const onSearch = vitest.fn(() => {});
    const { queryByPlaceholderText } = render(<Search onSearch={onSearch} />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
    // to call onSearch function
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});
