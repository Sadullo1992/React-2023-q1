import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import Order from './Order';
import { IFormData } from './Form';

const mockOrder: IFormData = {
  name: 'John',
  country: 'Belarus',
  date: '2023-04-01',
  file: 'photo.jpg',
  paymentType: 'card',
  agree: true,
};

describe('Order', () => {
  it('Order display correct card', () => {
    const { getByTestId } = render(<Order order={mockOrder} />);
    expect(getByTestId('order-name').textContent).toEqual(`Name: ${mockOrder.name}`);
  });

  it('Agreement is show not approved If agree is false', () => {
    const { getByTestId } = render(<Order order={{ ...mockOrder, agree: false }} />);
    expect(getByTestId('order-agree').textContent).toEqual('Agreement: not approved');
  });
});
