import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import CartIcon from '.';
import { cartStore } from '@/stores/CartStore';

jest.mock('@/stores/CartStore');
describe('CartIcon component', () => {
  let container: ReturnType<typeof render>;

  beforeEach(() => {
    (cartStore as unknown as jest.Mock).mockReturnValue({
      carts: [
        {
          id: '0',
          name: 'T-shirt',
          ratings: 5
        }
      ]
    });

    container = render(
      <BrowserRouter>
        <CartIcon />
      </BrowserRouter>
    );
  });

  it('Render correcty', () => {
    expect(container).toMatchSnapshot();
  });

  it('Icon number should render number correctly', () => {
    const cartNumber = container.getByLabelText('cartNumber');
    expect(cartNumber.textContent).toBe('1');
  });
});
