import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { NAVBAR } from '../../constants'

// Components
import Navbar from '.'

describe('Navbar component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Navbar navbarData={NAVBAR} />
      </BrowserRouter>,
    )
    expect(container).toMatchSnapshot()
  })
})
