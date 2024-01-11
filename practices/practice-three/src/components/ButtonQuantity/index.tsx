import { Button, HStack, Input } from '@chakra-ui/react'

const ButtonQuantity = () => {
  return (
    <HStack w="130px" borderRadius="100px" background="whiteSmoke">
      <Button border="none" color="darkGray" fontSize="18px" fontWeight="bold">
        -
      </Button>
      <Input
        padding="0px"
        border="none"
        color="primary"
        fontWeight="bold"
        fontSize="22px"
      />
      <Button border="none" fontSize="18px" color="primary" fontWeight="bold">
        +
      </Button>
    </HStack>
  )
}

export default ButtonQuantity
