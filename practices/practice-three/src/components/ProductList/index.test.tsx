import { render } from '@testing-library/react';

// Constants
import { CARD_DATA } from '@/constants';

// Components
import ProductList from '.';

jest.mock('@chakra-ui/react');

describe('Product List component', () => {
  it('Render correcty', () => {
    const container = render(<ProductList data={CARD_DATA} />);
    expect(container).toMatchSnapshot();
  });
});
