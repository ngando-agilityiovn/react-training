import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { SIZE_DATA } from '@/constants'

// Components
import Size from '.'

describe('ButtonQuantity component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Size options={SIZE_DATA} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
