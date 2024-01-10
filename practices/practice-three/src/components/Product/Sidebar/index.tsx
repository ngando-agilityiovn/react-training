import { Accordion, AccordionItem, Button, Flex, Text } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Components
import { Filter } from '@/components'

const Sidebar = () => {
  return (
    <Flex flexDirection="column">
      <Flex justifyContent={'space-between'} mb={'23px'}>
        <Text fontSize="20px" fontWeight="medium" color="dark">
          Filters
        </Text>
        <Button textTransform="capitalize">clear all</Button>
      </Flex>
      <Accordion
        w="304px"
        display="flex"
        flexDirection="column"
        gap={30}
        border="1px solid"
        borderColor="whiteSmoke"
      >
        <AccordionItem>
          <Filter dataFilter={FILTER.category} title="Category" />
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
    </Flex>
  )
}

export default Sidebar
