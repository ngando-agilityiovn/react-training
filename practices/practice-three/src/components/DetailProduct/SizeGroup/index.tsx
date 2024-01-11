import { useState } from 'react'
import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { SIZE_DATA } from '@/constants'

interface ISizeItem {
  size: string
}

interface ISizeGroup {
  dataSize: ISizeItem[]
}

const SizeGroup = ({ dataSize }: ISizeGroup) => {
  const [value, setValue] = useState(SIZE_DATA[0].size)
  return (
    <>
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Size
      </Text>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          {dataSize.map(({ size }) => (
            <Box
              backgroundColor="gray100"
              borderRadius="8px"
              px="7px"
              py="10px"
              mr="11px"
              background="darkGrey30"
              _active={{
                background: 'gray100',
                color: 'primary',
              }}
            >
              <Radio value={size}>{size}</Radio>
            </Box>
          ))}
        </Stack>
      </RadioGroup>
    </>
  )
}

export default SizeGroup
