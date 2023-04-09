import { describe, it, vitest } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('Products component shows no product content, if empty array recieved from props', () => {
    const setPage = vitest.fn();
    const { getByRole } = render(<Pagination totalPages={3} setPage={setPage} page={1} />);
    const prevBtn = getByRole('button', { name: /Prev/ });
    const nextBtn = getByRole('button', { name: /Next/ });

    // prev btn has disabled class
    expect(prevBtn.classList.contains('disabled')).toBe(true);

    fireEvent.click(nextBtn);
    expect(setPage).toHaveBeenCalledWith(2);
  });
});
