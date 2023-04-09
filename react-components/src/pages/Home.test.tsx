import { describe, it } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, waitFor } from '@testing-library/react';
import mockFullResponse from '../data/fullResponse.json';
import Home from './Home';

const server = setupServer(
  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    return res(ctx.json(mockFullResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home page', () => {
  it('Home search box api calls with succesfull response', async () => {
    const { getByText, getByRole, queryByPlaceholderText } = render(<Home />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'fanta' } });
    expect(searchInput.value).toBe('fanta');

    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);

    await waitFor(() => expect(getByText(/Likes: 16/)).toBeInTheDocument());
  });

  it('Home search box api calls with error response', async () => {
    server.use(
      rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    const { getByText, getByRole, queryByPlaceholderText } = render(<Home />);
    const searchInput = queryByPlaceholderText('Search photos...') as HTMLInputElement;
    const searchBtn = getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'fanta' } });
    expect(searchInput.value).toBe('fanta');

    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);

    await waitFor(() => expect(getByText(/Oops:/)).toBeInTheDocument());
  });
});
