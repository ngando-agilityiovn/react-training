import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import CustomModal from '.'

describe('CustomModal component', () => {
  const modalProps = {
    children: <p>Test</p>,
    title: 'Delete product',
    isOpen: true,
    onClose: jest.fn
  }
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <CustomModal {...modalProps} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
