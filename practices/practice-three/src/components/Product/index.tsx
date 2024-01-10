import { Accordion, AccordionItem, Container } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Types
import { Title } from '@/types'

// Components
import Filter from '../Filter'

const Product = () => {
  return (
    <Container maxW="1280px" p="0">
      <Accordion w="304px">
        <AccordionItem>
          <Filter dataFilter={FILTER.category} title={Title.CATEGORY} />
        </AccordionItem>
        <AccordionItem>
          <Filter dataFilter={FILTER.brand} title={Title.BRAND} />
        </AccordionItem>
        <AccordionItem>
          <Filter dataFilter={FILTER.size} title={Title.SIZE} />
        </AccordionItem>
        <AccordionItem>
          <Filter title={Title.PRICE} />
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default Product
