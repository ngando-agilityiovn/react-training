import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ButtonQuantity from '.'

describe('ButtonQuantity component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ButtonQuantity />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
