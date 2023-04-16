import { describe, it } from 'vitest';

import renderWithProviders from '../utils/test-utils';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('Products component shows no product content, if empty array recieved from props', () => {
    const { getByRole } = renderWithProviders(<Pagination totalPages={3} />);
    const prevBtn = getByRole('button', { name: /Prev/ });

    // prev btn has disabled class
    expect(prevBtn.classList.contains('disabled')).toBe(true);
  });
});
