import { HStack, Stack, Text, useRadioGroup } from '@chakra-ui/react'
import Color from './Color'

interface IColorGroup {
  colors?: string[]
}

const ColorGroup = ({ colors }: IColorGroup) => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '#3498db'
  })

  return (
    <Stack {...getRootProps()} borderBottom="1px solid gainsboro">
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Color
      </Text>
      <HStack>
        {colors?.map((item) => {
          return (
            <Color
              key={item}
              color={item}
              {...getRadioProps({ value: item })}
            />
          )
        })}
      </HStack>
    </Stack>
  )
}

export default ColorGroup
