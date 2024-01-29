import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Cart from '.';
import { CARD_DATA } from '@/constants';

import { cartStore } from '@/stores/CartStore';

jest.mock('@/stores/CartStore');
describe('ProductCart component', () => {
  const mockCarts = CARD_DATA;

  let container: ReturnType<typeof render>;

  beforeEach(() => {
    (cartStore as unknown as jest.Mock).mockReturnValue({
      carts: mockCarts
    });
    container = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
  });
  it('Render correcty', () => {
    expect(container).toMatchSnapshot();
  });
});
