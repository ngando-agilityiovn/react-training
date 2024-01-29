import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Home from '.';

jest.mock('@chakra-ui/react');
describe('Home component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
