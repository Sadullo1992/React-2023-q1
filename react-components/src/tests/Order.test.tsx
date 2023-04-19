import { describe, it } from 'vitest';

import renderWithProviders from '../utils/test-utils';

import Order from '../components/Order';
import { IOrder } from '../types/order.model';

const mockOrder: IOrder = {
  id: '123',
  name: 'John',
  country: 'Belarus',
  date: '2023-04-01',
  file: 'photo.jpg',
  paymentType: 'card',
  agree: true,
};

describe('Order', () => {
  it('Order display correct card', () => {
    const { getByTestId } = renderWithProviders(<Order order={mockOrder} />);
    expect(getByTestId('order-name').textContent).toEqual(`Name: ${mockOrder.name}`);
  });

  it('Agreement is show not approved If agree is false', () => {
    const { getByTestId } = renderWithProviders(<Order order={{ ...mockOrder, agree: false }} />);
    expect(getByTestId('order-agree').textContent).toEqual('Agreement: not approved');
  });
});
