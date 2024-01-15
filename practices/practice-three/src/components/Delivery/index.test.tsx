import { render } from '@testing-library/react'

// Constants
import { DELIVERY_DATA } from '@/constants'

// Components
import Delivery from '.'

describe('Delivery component', () => {
  it('Render correcty', () => {
    const container = render(<Delivery data={DELIVERY_DATA} />)
    expect(container).toMatchSnapshot()
  })
})
