import { render } from '@testing-library/react'

// Components
import ColorGroup from '.'
import { DATA_COLOR } from '@/constants'
import { useRadio } from '@chakra-ui/react'

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useRadio: jest.fn()
}))
describe('ColorGroup component', () => {
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

    const { container } = render(<ColorGroup colors={DATA_COLOR} />)
    expect(container).toMatchSnapshot()
  })
})
