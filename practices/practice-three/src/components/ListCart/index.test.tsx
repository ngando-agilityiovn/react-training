import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import { ListCart } from '.'

describe('ListCart component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ListCart />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
