import { FILTER } from '@/constants'
import { Accordion, AccordionItem, Button, Flex, Text } from '@chakra-ui/react'
import Filter from '../Filter'

const Sidebar = () => {
  return (
    <>
      <Flex gap={149}>
        <Text fontSize={20} fontWeight="medium" color="dark">
          Filters
        </Text>
        <Button variant="outline" textTransform="capitalize">
          Clear all
        </Button>
      </Flex>
      <Accordion
        marginTop={23}
        w="304px"
        display="flex"
        flexDirection="column"
        gap={30}
        border="1px solid"
        borderColor="darkGrey30"
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
    </>
  )
}

export default Sidebar
