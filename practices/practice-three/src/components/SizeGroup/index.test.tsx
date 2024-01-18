import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import SizeGroup from '.'

describe('SizeGroup component', () => {
  const sizeGroupProps = {
    onChangeValue: jest.fn
  }
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <SizeGroup {...sizeGroupProps} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
