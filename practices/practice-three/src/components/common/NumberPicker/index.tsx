import { Button, HStack, Input } from '@chakra-ui/react'

interface INumberPicker {
  quantity?: number
  onDecrease?: () => void
  onIncrease?: () => void
  onChangeQuantity?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

const NumberPicker = ({
  quantity,
  onIncrease,
  onDecrease,
  onChangeQuantity,
  onBlur
}: INumberPicker) => {
  return (
    <HStack w="130px" borderRadius="100px" background="whiteSmoke">
      <Button
        border="none"
        color="darkGray"
        fontSize="18px"
        fontWeight="bold"
        onClick={onDecrease}
        isDisabled={quantity! <= 1 && true}
      >
        -
      </Button>

      <Input
        padding="0px"
        border="none"
        color="primary"
        fontWeight="bold"
        fontSize="22px"
        type="number"
        value={quantity === null || quantity! <= 0 ? 1 : quantity}
        onChange={onChangeQuantity}
        onBlur={onBlur}
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
