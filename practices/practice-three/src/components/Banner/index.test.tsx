import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Banner from '.'
describe('Banner component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
