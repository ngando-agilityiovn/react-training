import { render } from '@testing-library/react'

// Constants
import { DATA_COLOR } from '@/constants'

// Components
import ColorGroup from '.'

describe('ColorGroup component', () => {
  it('Render correcty', () => {
    const container = render(<ColorGroup dataColor={DATA_COLOR} />)
    expect(container).toMatchSnapshot()
  })
})
