/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { apiSlice } from './redux/apiSlice';
import { setupStore } from './redux/store';
import server from './tests/mock/server';

expect.extend(matchers);

const store = setupStore({});

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'warn',
  })
);
afterEach(() => {
  server.resetHandlers();
  store.dispatch(apiSlice.util.resetApiState());
});
afterAll(() => server.close());
