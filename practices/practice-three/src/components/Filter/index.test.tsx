import { Accordion, AccordionItem } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { FILTER } from '@/constants'

// Components
import Filter from '.'

jest.mock('@chakra-ui/react')
describe('Filter component', () => {
  const mockProps = {
    title: 'Category',
    data: FILTER.category,
    handleFilterCategory: jest.fn(),
    handleFilterBrand: jest.fn(),
    handleFilterSize: jest.fn(),
    handleFilterPrice: jest.fn()
  }
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Accordion>
          <AccordionItem>
            <Filter {...mockProps} />
          </AccordionItem>
        </Accordion>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
