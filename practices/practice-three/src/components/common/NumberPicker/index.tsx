import { Button, HStack, Input } from '@chakra-ui/react'

interface INumberPicker {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

const NumberPicker = ({ quantity, onDecrease, onIncrease }: INumberPicker) => {
  return (
    <HStack w="130px" borderRadius="100px" background="whiteSmoke">
      <Button
        border="none"
        color="darkGray"
        fontSize="18px"
        fontWeight="bold"
        onClick={onDecrease}
      >
        -
      </Button>
      <Input
        padding="0px"
        border="none"
        color="primary"
        fontWeight="bold"
        fontSize="22px"
        value={quantity}
      />
      <Button
        border="none"
        fontSize="18px"
        color="primary"
        fontWeight="bold"
        onClick={onIncrease}
      >
        +
      </Button>
    </HStack>
  )
}

export default NumberPicker
