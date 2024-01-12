import { render } from '@testing-library/react'

// Constants
import { DATA_COLOR } from '@/constants'

// Components
import ColorGroup from '.'

describe('ColorGroup component', () => {
  it('Render correcty', () => {
    const container = render(<ColorGroup data={DATA_COLOR} />)
    expect(container).toMatchSnapshot()
  })
})
