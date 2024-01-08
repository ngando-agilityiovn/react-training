import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Header from '.'

describe('Header component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(container).toMatchSnapshot()
  })
})
