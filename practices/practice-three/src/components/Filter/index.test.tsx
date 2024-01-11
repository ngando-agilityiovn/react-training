import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { FILTER } from '@/constants'

// Components
import Filter from '.'
import { Accordion, AccordionItem } from '@chakra-ui/react'

describe('Filter component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Accordion>
          <AccordionItem>
            <Filter title="Catogory" data={FILTER.category} />
          </AccordionItem>
        </Accordion>
      </BrowserRouter>,
    )
    expect(container).toMatchSnapshot()
  })
})
