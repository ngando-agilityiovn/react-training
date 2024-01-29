import { render } from '@testing-library/react'

// Components
import Sidebar from '.'

jest.mock('@chakra-ui/react')

describe('Sidebar component', () => {
  const mockProps = {
    handleFilterCategory: jest.fn,
    handleFilterBrand: jest.fn,
    handleFilterSize: jest.fn,
    handleFilterPrice: jest.fn
  }
  it('Render correcty', () => {
    const container = render(<Sidebar {...mockProps} />)
    expect(container).toMatchSnapshot()
  })
})
