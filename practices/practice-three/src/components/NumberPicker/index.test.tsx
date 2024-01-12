import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import NumberPicker from '.'

describe('NumberPicker component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <NumberPicker />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
