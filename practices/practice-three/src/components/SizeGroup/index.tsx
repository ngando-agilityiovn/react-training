import {
  Box,
  HStack,
  Radio,
  useRadioGroup,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react'

// Types
import { ISise } from '@/types'

// Constants
import { SIZE_OPTIONS } from '@/constants'

interface ISizeGroup {
  onChangeValue: (value: string) => void
}

const SizeGroup = ({ onChangeValue }: ISizeGroup) => {
  // Handle change value product size
  const handleChangeValue = (value: string) => {
    onChangeValue?.(value)
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: 'Small',
    onChange: handleChangeValue
  })

  const group = getRootProps()
  // Calculate color values outside the map function

  const boxBackgroundColor = useColorModeValue('whiteSmoke', 'darkModeColor')
  const hoverBackgroundColor = useColorModeValue(
    'lightBlue',
    'darkModeHoverColor'
  )
  const selectedBackgroundColor = useColorModeValue(
    'pattensBlue',
    'darkModeSelectedColor'
  )

  return (
    <Stack {...getRootProps()} borderBottom="1px solid gainsboro" pb="30px">
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Size
      </Text>
      <HStack {...group}>
        {SIZE_OPTIONS?.map(({ value, label }: ISise) => {
          const radio = getRadioProps({ value })
          return (
            <Box
              key={value}
              backgroundColor={boxBackgroundColor}
              borderRadius="8px"
              px="7px"
              py="10px"
              mr="11px"
              _hover={{
                backgroundColor: hoverBackgroundColor
              }}
              _after={{
                backgroundColor: selectedBackgroundColor
              }}
            >
              <Radio {...radio} value={value}>
                {label}
              </Radio>
            </Box>
          )
        })}
      </HStack>
    </Stack>
  )
}

export default SizeGroup
