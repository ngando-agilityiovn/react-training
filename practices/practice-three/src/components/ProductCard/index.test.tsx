import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT, REVIEWERS } from '@/constants'

// Components
import ProductCard from '.'

describe('ProductCard component', () => {
  const props = {
    id: '1',
    name: 'Jeans',
    images: IMAGE_PRODUCT,
    price: 25,
    currency: '$',
    quantity: 1,
    color: 'red',
    size: 'Medium',
    reviews: REVIEWERS,
    ratings: 5
  }
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ProductCard props={props} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
