import { render } from '@testing-library/react'

// Components
import DeleteModal from '.'

jest.mock('@chakra-ui/react')

describe('DeleteModal component', () => {
  const mockProps = {
    onOpenDeleteModal: false,
    onToggleModal: jest.fn,
    onDeleteProduct: jest.fn
  }
  it('Render correcty', () => {
    const container = render(<DeleteModal {...mockProps} />)
    expect(container).toMatchSnapshot()
  })
})
