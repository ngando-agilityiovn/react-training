import { Accordion, AccordionItem, Button, Flex, Text } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Types
import { Title } from '@/types'

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
          <Filter data={FILTER.category} title={Title.CATEGORY} />
        </AccordionItem>
        <AccordionItem>
          <Filter data={FILTER.brand} title={Title.BRAND} />
        </AccordionItem>
        <AccordionItem>
          <Filter data={FILTER.size} title={Title.SIZE} />
        </AccordionItem>
        <AccordionItem>
          <Filter title={Title.PRICE} />
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default Sidebar
