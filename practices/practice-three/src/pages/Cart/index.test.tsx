import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Cart from '.'

describe('ProductCart component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
