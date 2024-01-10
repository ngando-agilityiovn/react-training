import { render } from '@testing-library/react'

// Constants
import { DELIVERY_DATA } from '@/constants'

// Components
import Delivery from '.'

describe('Delivery component', () => {
  it('Render correcty', () => {
    const container = render(<Delivery deliveryDate={DELIVERY_DATA} />)
    expect(container).toMatchSnapshot()
  })
})
