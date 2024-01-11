import { render } from '@testing-library/react'

// Components
import Sidebar from '.'

jest.mock('@chakra-ui/react')

describe('Sidebar component', () => {
  it('Render correcty', () => {
    const container = render(<Sidebar />)
    expect(container).toMatchSnapshot()
  })
})
