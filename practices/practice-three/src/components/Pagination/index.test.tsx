// Components
import { fireEvent, render } from '@/helpers'
import Pagination from '.'

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

  it('handleClick updates indexImage correctly', () => {
    const { getByText } = render(<Pagination {...paginationProps} />)

    fireEvent.click(getByText('2'))

    expect(getByText('2').textContent).toEqual('2')
  })
})
