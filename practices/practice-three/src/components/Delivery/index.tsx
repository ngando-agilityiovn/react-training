import { Box, Flex, Text } from '@chakra-ui/react'

// Icon components
import { Bag, Car } from '../Icons'

interface IDeliveryItem {
  title: string
  description: string
}

interface IDelivery {
  deliveryDate: IDeliveryItem[]
}

const Delivery = ({ deliveryDate }: IDelivery) => {
  return (
    <Box
      p="17px"
      borderRadius="14px"
      border="1px solid"
      borderColor="gainsboro"
      w="582px"
    >
      {deliveryDate.map(({ title, description }) => (
        <>
          <Flex gap="14px">
            <Box>{title === 'Free Delivery' ? <Car /> : <Bag />}</Box>
            <Box>
              <Text
                mb="7px"
                color="secondary"
                fontWeight="bold"
                fontSize="17px"
              >
                {title}
              </Text>
              <Text variant="secondary">{description}</Text>
            </Box>
          </Flex>
          <Box my="21px" w="548px" h="1px" background="gainsboro"></Box>
        </>
      ))}
    </Box>
  )
}

export default Delivery
