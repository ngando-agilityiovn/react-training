import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import { ListCart } from '.';
import { CARD_DATA } from '@/constants';

describe('ListCart component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ListCart data={CARD_DATA} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
