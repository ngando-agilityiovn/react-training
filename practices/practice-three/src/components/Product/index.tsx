import { Accordion, AccordionItem, Container } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Components
import Filter from '../Filter'

const Product = () => {
  return (
    <Container maxW="1280px" p="0">
      <Accordion w="304px">
        <AccordionItem>
          <Filter dataFilter={FILTER.category} title="Catogory" />
        </AccordionItem>
        <AccordionItem>
          <Filter dataFilter={FILTER.brand} title="Brand" />
        </AccordionItem>
        <AccordionItem>
          <Filter dataFilter={FILTER.brand} title="Size" />
        </AccordionItem>
        <AccordionItem>
          <Filter dataFilter={FILTER.brand} title="Price" />
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default Product
