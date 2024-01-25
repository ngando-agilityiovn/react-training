import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Contants
import { IMAGE_PRODUCT } from '@/constants'

// Components
import CartItem from '.'
// import { act } from 'react-dom/test-utils'
// import { ColorGroup } from '@/components/common'

describe('CartItem component', () => {
  const props = {
    id: '1',
    name: 'Jeans',
    images: IMAGE_PRODUCT,
    price: 25,
    currency: '$',
    quantity: 1,
    color: 'red',
    size: 'Medium'
  }
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <CartItem props={props} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
