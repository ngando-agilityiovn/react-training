import { render } from '@testing-library/react'

// Components
import ListProduct from '.'
import { CARDDATA, TEXTDATA } from '@/constants'

jest.mock('@chakra-ui/react')

describe('Sidebar component', () => {
  it('Render correcty', () => {
    const container = render(
      <ListProduct cardData={CARDDATA} textData={TEXTDATA} />,
    )
    expect(container).toMatchSnapshot()
  })
})
