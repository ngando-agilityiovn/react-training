import { render } from '@testing-library/react'

// Constants
import { PAGINATION_DATA } from '@/constants'

// Components
import Pagination from '.'

jest.mock('@chakra-ui/react')

describe('Sidebar component', () => {
  it('Render correcty', () => {
    const container = render(<Pagination textData={PAGINATION_DATA} />)
    expect(container).toMatchSnapshot()
  })
})
