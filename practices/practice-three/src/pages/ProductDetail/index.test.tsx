import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ProductDetail from '.'

describe('ProductDetail component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ProductDetail />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
