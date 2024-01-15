import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ProductCart from '.'

describe('ProductCart component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ProductCart
          quantity={10}
          image={'https://source.unsplash.com/random/587x691/?fashion'}
          name={'Jean '}
          currency={'$'}
          price={103000}
        />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
