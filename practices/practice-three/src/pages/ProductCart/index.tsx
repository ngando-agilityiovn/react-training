import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Select,
  Text
} from '@chakra-ui/react'

// Constants
import { DATA_COLOR } from '@/constants'

// Components
import { ColorGroup, NumberPicker } from '@/components'

interface ICart {
  quantity: number
  image: string
  name: string
  currency: string
  price: number
}

const ProductCart = ({ quantity, name, image, currency, price }: ICart) => {
  return (
    <Container maxW="1280px" p="0">
      <Box mb="87px">
        <Box mt="20px" borderTop="1px solid" borderColor="whiteSmoke">
          <Text
            mt="68px"
            mb="20px"
            as="h1"
            color="textWarning"
            fontSize="40px"
            fontWeight="bold"
          >
            Cart page
          </Text>
          <Text fontSize="16px">
            Manage your cart. You can update any information before checkout
          </Text>
        </Box>

        <HStack
          mt="58px"
          gap="48px"
          borderBottom="1px solid gainsboro"
          flexWrap="wrap"
        >
          <Box top="0px" mb="31px">
            <Image src={image} alt={name} width="100%" height="303px" />
          </Box>
          <Box mb="31px">
            <Box mb="24px">
              <Text color="gray700" fontSize="24px" mb="16px">
                {name}
              </Text>
              <Text
                as="span"
                color="midnightExpress"
                fontWeight="bold"
                fontSize="16px"
              >
                {currency}
                {price}
              </Text>
            </Box>
            <ColorGroup colors={DATA_COLOR} />
            <Flex gap="24px" justifyContent="space-between">
              <HStack>
                <Select
                  placeholder="Select option"
                  w="192px"
                  h="40px"
                  borderColor="midnightExpress"
                  border="1px solid"
                >
                  <option value="option1">Size: Small</option>
                  <option value="option2">Size: Medium</option>
                  <option value="option2">Size: Large</option>
                  <option value="option2">Size: Extra Large</option>
                  <option value="option3">Size: XXL</option>
                </Select>
                <NumberPicker quantity={quantity} onChangeQuantity={() => {}} />
              </HStack>
              <Button variant="ghost" leftIcon={<DeleteIcon />}>
                Remove
              </Button>
            </Flex>
          </Box>
        </HStack>
      </Box>
      <Flex flexDirection="column" alignItems="flex-end">
        <Text color="primary" fontWeight="bold" fontSize="34px" mb="57px">
          Total: {currency}
        </Text>
        <Button variant="solid" padding="17px 81px">
          Go to check
        </Button>
      </Flex>
    </Container>
  )
}

export default ProductCart
