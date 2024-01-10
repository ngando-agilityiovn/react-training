import { render } from '@testing-library/react'

// Components
import ListProduct from '.'
import { CARD_DATA, TEXTDATA } from '@/constants'

jest.mock('@chakra-ui/react')

describe('Sidebar component', () => {
  it('Render correcty', () => {
    const container = render(
      <ListProduct cardData={CARD_DATA} textData={TEXTDATA} />,
    )
    expect(container).toMatchSnapshot()
  })
})
