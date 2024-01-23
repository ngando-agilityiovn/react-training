import { HStack, Stack, Text, useRadioGroup } from '@chakra-ui/react'

// Constants
import { DATA_COLOR } from '@/constants'

// Components
import Color from './Color'

interface IColorGroup {
  onChangeValue: (value: string) => void
  color?: string
}

const ColorGroup = ({ onChangeValue, color }: IColorGroup) => {
  const handleChangeValue = (value: string) => {
    onChangeValue?.(value)
  }

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: color ? color : '#ffd3d3',
    onChange: handleChangeValue
  })

  return (
    <Stack {...getRootProps()}>
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Color
      </Text>
      <HStack>
        {DATA_COLOR?.map((item) => {
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
