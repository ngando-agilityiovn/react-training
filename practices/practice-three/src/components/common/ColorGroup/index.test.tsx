import { render } from '@testing-library/react'
import { useRadio } from '@chakra-ui/react'

// Constants
import { DATA_COLOR } from '@/constants'

// Components
import ColorGroup from '.'

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useRadio: jest.fn()
}))
describe('ColorGroup component', () => {
  const colorGroupProps = {
    colors: DATA_COLOR,
    onChangeValue: jest.fn()
  }
  it('renders Color component correctly', () => {
    const mockUseRadio = jest.fn()
    mockUseRadio.mockReturnValue({
      state: { isChecked: true },
      getInputProps: jest.fn(),
      getRadioProps: jest.fn(),
      htmlProps: {},
      getLabelProps: jest.fn()
    })
    ;(useRadio as jest.Mock).mockImplementation(mockUseRadio)

    const { container } = render(<ColorGroup {...colorGroupProps} />)
    expect(container).toMatchSnapshot()
  })
})
