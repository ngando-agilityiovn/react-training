import { Accordion, AccordionItem, Button, Flex, Text } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Types
import { Title } from '@/types'

// Components
import { Filter } from '@/components'

type TSidebar = {
  handleFilterCategory: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFilterBrand: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFilterSize: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFilterPrice: (value: number) => void
}

const Sidebar = ({
  handleFilterCategory,
  handleFilterBrand,
  handleFilterSize,
  handleFilterPrice
}: TSidebar) => {
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
        allowMultiple
      >
        <AccordionItem>
          <Filter
            data={FILTER.category}
            title={Title.CATEGORY}
            handleFilterCategory={handleFilterCategory}
          />
        </AccordionItem>
        <AccordionItem>
          <Filter
            data={FILTER.brand}
            title={Title.BRAND}
            handleFilterBrand={handleFilterBrand}
          />
        </AccordionItem>
        <AccordionItem>
          <Filter
            data={FILTER.size}
            title={Title.SIZE}
            handleFilterSize={handleFilterSize}
          />
        </AccordionItem>
        <AccordionItem>
          <Filter title={Title.PRICE} handleFilterPrice={handleFilterPrice} />
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default Sidebar
