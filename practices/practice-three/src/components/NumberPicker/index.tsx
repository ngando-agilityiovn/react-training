import { Button, HStack, Input } from '@chakra-ui/react'

interface INumberPicker {
  quantity: number
  onChangeQuantity: () => void
  onIncrease: () => void
  onDecrease: () => void
}

const NumberPicker = ({
  quantity,
  onChangeQuantity,
  onDecrease,
  onIncrease
}: INumberPicker) => {
  return (
    <HStack w="130px" borderRadius="100px" background="whiteSmoke">
      <Button
        border="none"
        color="darkGray"
        fontSize="18px"
        fontWeight="bold"
        onClick={onIncrease}
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
        onChange={onChangeQuantity}
      />
      <Button
        border="none"
        fontSize="18px"
        color="primary"
        fontWeight="bold"
        onClick={onDecrease}
      >
        +
      </Button>
    </HStack>
  )
}

export default NumberPicker
