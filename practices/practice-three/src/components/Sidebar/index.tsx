import { Accordion, AccordionItem, Button, Flex, Text } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Types
import { Title } from '@/types'

// Components
import Filter from '../Filter'

const Sidebar = () => {
  return (
    <>
      <Flex gap={149}>
        <Text fontSize={20} fontWeight="medium" color="dark">
          Filters
        </Text>
        <Button textTransform="capitalize">clear all</Button>
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
    </>
  )
}

export default Sidebar
