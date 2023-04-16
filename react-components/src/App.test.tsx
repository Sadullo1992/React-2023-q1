import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import renderWithProviders from './utils/test-utils';

import App from './App';

describe('App', () => {
  it('Renders Home page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Our Gallery');
  });

  it('Renders About page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About page');
  });

  it('Renders Orders page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/order']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Place order');
  });

  it('Renders Not found page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
  });
});
