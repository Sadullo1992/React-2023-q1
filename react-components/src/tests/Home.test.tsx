import { describe, it } from 'vitest';
import { fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home';

import renderWithProviders from '../utils/test-utils';
import SEARCH_VALUE from '../utils/contants';

describe('Home page', () => {
  it('Home search box api calls with succesfull response', async () => {
    const { getByText, getByRole, queryByPlaceholderText } = renderWithProviders(<Home />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: SEARCH_VALUE } });
    expect(searchInput.value).toBe(SEARCH_VALUE);

    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);

    await waitFor(() => expect(getByText(/Likes: 16/)).toBeInTheDocument());
  });

  it('Home search box api calls with not find result', async () => {
    const { getByText, getByRole, queryByPlaceholderText } = renderWithProviders(<Home />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'not-find-result-by-query' } });
    fireEvent.click(searchBtn);

    await waitFor(() =>
      expect(getByText(/Sorry, We could not find any photos.../i)).toBeInTheDocument()
    );
  });

  it('Home search box api calls with error response', async () => {
    const { getByText, getByRole, queryByPlaceholderText } = renderWithProviders(<Home />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'fanta' } });
    expect(searchInput.value).toBe('fanta');

    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);

    await waitFor(() =>
      expect(getByText(/Oops: Something went wrong on our end!/)).toBeInTheDocument()
    );
  });
});
