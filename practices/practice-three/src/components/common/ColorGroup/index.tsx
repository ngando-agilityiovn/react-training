import { HStack, Stack, Text, useRadioGroup } from '@chakra-ui/react'
import Color from './Color'

interface IColorGroup {
  colors?: string[]
  onChangeValue: (value: string) => void
}

const ColorGroup = ({ colors, onChangeValue }: IColorGroup) => {
  const handleChangeValue = (value: string) => {
    onChangeValue?.(value)
  }

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '#3498db',
    onChange: handleChangeValue
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
