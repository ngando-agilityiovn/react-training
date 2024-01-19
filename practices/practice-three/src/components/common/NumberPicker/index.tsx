import { Button, HStack, Input } from '@chakra-ui/react'
import { useState } from 'react'

interface INumberPicker {
  quantity: number
  onChangeQuantity: (value: number) => void
}

const NumberPicker = ({ quantity, onChangeQuantity }: INumberPicker) => {
  const [number, setNumber] = useState(quantity)

  const handleClickIncrease = () => {
    setNumber((prevState) => prevState + 1)
    onChangeQuantity(number + 1)
  }

  const handleClickDecrease = () => {
    setNumber((prevState) => prevState - 1)
    onChangeQuantity(number - 1)
  }

  const handleInputChange = (e) => {
    onChangeQuantity(Number(e.target.value))
    setNumber(Number(e.target.value))
  }

  return (
    <HStack w="130px" borderRadius="100px" background="whiteSmoke">
      <Button
        border="none"
        color="darkGray"
        fontSize="18px"
        fontWeight="bold"
        onClick={handleClickDecrease}
      >
        -
      </Button>
      <Input
        padding="0px"
        border="none"
        color="primary"
        fontWeight="bold"
        fontSize="22px"
        value={number}
        onChange={handleInputChange}
      />
      <Button
        border="none"
        fontSize="18px"
        color="primary"
        fontWeight="bold"
        onClick={handleClickIncrease}
      >
        +
      </Button>
    </HStack>
  )
}

export default NumberPicker
