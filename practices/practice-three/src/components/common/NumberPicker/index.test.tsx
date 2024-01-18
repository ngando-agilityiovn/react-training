import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import NumberPicker from '.'

describe('NumberPicker component', () => {
  const mockProps = {
    onChangeQuantity: jest.fn(),
    quantity: 5,
    onIncrease: jest.fn(),
    onDecrease: jest.fn()
  }
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <NumberPicker {...mockProps} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
