import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import CartIcon from '.'

describe('CartIcon component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <CartIcon quantity={6} />
      </BrowserRouter>,
    )
    expect(container).toMatchSnapshot()
  })
})
