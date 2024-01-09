import { render } from '@testing-library/react'

// Constants
import { SIZE_DATA } from '@/constants'

// Components
import SizeGroup from '.'

describe('SizeGroup component', () => {
  it('Render correcty', () => {
    const container = render(<SizeGroup dataSize={SIZE_DATA} />)
    expect(container).toMatchSnapshot()
  })
})
