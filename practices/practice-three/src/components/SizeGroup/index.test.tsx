import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import SizeGroup from '.'

describe('SizeGroup component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <SizeGroup />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
