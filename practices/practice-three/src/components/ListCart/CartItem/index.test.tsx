import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Contants
import { IMAGE_PRODUCT } from '@/constants';

// Components
import CartItem from '.';

import { cartStore } from '@/stores/CartStore';

jest.mock('@/stores/CartStore');

describe('CartItem component', () => {
  const mockRemoveProduct = jest.fn();
  const mockUpdateProductColor = jest.fn();
  const mockUpdateProductSize = jest.fn();
  const mockUpdateProductQuantity = jest.fn();

  const props = {
    id: '1',
    name: 'Jeans',
    images: IMAGE_PRODUCT,
    price: 25,
    currency: '$',
    quantity: 1,
    color: 'red',
    size: 'Medium'
  };

  let container: ReturnType<typeof render>;

  beforeEach(() => {
    (cartStore as unknown as jest.Mock).mockReturnValue({
      removeProducts: mockRemoveProduct,
      updateProductColor: mockUpdateProductColor,
      updateProductSize: mockUpdateProductSize,
      updateProductQuantity: mockUpdateProductQuantity
    });

    container = render(
      <BrowserRouter>
        <CartItem props={props} />
      </BrowserRouter>
    );
  });
  it('Render correcty', () => {
    expect(container).toMatchSnapshot();
  });

  it('UpdateProductColor should be called when clicking on radio button', () => {
    const radioColor = container.getByLabelText('radio-#ffd3f8');
    fireEvent.click(radioColor);
    expect(mockUpdateProductColor).toHaveBeenCalledWith('#ffd3f8', '1');
  });

  it('UpdateProductSize should be called when selecting option', () => {
    const select = container.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Small' } });
    expect(mockUpdateProductSize).toHaveBeenCalledWith('Small', '1');
  });
});
