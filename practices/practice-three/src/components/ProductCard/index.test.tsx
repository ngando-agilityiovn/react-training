import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Constants
import { IMAGE_PRODUCT, REVIEWERS } from '@/constants';

// Components
import ProductCard from '.';
import { cartStore } from '@/stores/CartStore';

jest.mock('@/stores/CartStore');

describe('ProductCard component', () => {
  const mockAddSingleProduct = jest.fn();
  const mockProps = {
    id: '1',
    name: 'Jeans',
    images: IMAGE_PRODUCT,
    price: 25,
    currency: '$',
    quantity: 1,
    color: 'red',
    size: 'Medium',
    reviews: REVIEWERS,
    ratings: 4
  };

  let container: ReturnType<typeof render>;

  process.env.REACT_APP_API_PROJECT = 'http:';

  beforeEach(() => {
    (cartStore as unknown as jest.Mock).mockReturnValue({
      addSingleProduct: mockAddSingleProduct
    });
    container = render(
      <BrowserRouter>
        <ProductCard props={mockProps} />
      </BrowserRouter>
    );
  });

  it('Render correcty', () => {
    expect(container).toMatchSnapshot();
  });

  it('UpdateProductInformation when clicking on add button', () => {
    const select = container.getByRole('button', {
      name: /add to cart/i
    });
    fireEvent.click(select);
    expect(mockAddSingleProduct).toHaveBeenCalledWith(mockProps);
  });
});
