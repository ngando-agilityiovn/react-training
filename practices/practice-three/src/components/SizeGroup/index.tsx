import { SIZE_DATA } from '@/constants'
import {
  Box,
  HStack,
  Radio,
  useRadioGroup,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react'

// interface CustomRadioProps {
//   options?: string[]
// }

const SizeGroup = () => {
  // const {  ...rest } = props

  const { getRootProps, getRadioProps } = useRadioGroup()

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
    <Stack {...getRootProps()}>
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Size
      </Text>
      <HStack {...group}>
        {SIZE_DATA?.map((value: string) => {
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
                {value}
              </Radio>
            </Box>
          )
        })}
      </HStack>
    </Stack>
  )
}

export default SizeGroup
