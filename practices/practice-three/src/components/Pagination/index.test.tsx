import { render } from '@testing-library/react'

// Components
import Pagination from '.'

jest.mock('@chakra-ui/react')

describe('Pagination component', () => {
  const paginationProps = {
    total: 35,
    onSelectPage: jest.fn(),
    onNextPage: jest.fn(),
    onPrevPage: jest.fn(),
    pageNumbers: [1, 2, 3],
    pageIndex: 3
  }
  it('Render correcty', () => {
    const container = render(<Pagination {...paginationProps} />)
    expect(container).toMatchSnapshot()
  })
})
