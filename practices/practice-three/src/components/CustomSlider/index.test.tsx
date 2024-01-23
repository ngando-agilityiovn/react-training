import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import CustomSlider from '.'

jest.mock('@chakra-ui/react')
describe('CustomSlider component', () => {
  const customSliderProps = {
    onSliderChange: jest.fn()
  }

  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <CustomSlider {...customSliderProps} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
