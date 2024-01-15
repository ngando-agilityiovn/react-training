import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ProductDetail from '.'

describe('ProductDetail component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ProductDetail
          id={0}
          name={''}
          price={0}
          category={''}
          brand={''}
          rating={0}
          size={[]}
          currency={''}
          quantity={0}
          reviews={[]}
          colors={[]}
          description={''}
          information={[]}
          images={[]}
        />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
