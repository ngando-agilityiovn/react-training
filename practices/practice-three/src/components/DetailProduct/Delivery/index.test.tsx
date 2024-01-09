import { render } from '@testing-library/react'

// Constants
import { DELIVERYDATA } from '@/constants'

// Components
import Delivery from '.'

describe('Delivery component', () => {
  it('Render correcty', () => {
    const container = render(<Delivery deliveryDate={DELIVERYDATA} />)
    expect(container).toMatchSnapshot()
  })
})
