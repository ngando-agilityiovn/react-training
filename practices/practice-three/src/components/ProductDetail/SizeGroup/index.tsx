import { useState } from 'react'
import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'

// Constants
import { SIZE_DATA } from '@/constants'

interface ISizeItem {
  size: string
}

interface ISizeGroup {
  data: ISizeItem[]
}

const SizeGroup = ({ data }: ISizeGroup) => {
  const [value, setValue] = useState(SIZE_DATA[0].size)
  return (
    <Box
      border="1px solid gainsboro"
      borderWidth="1px 0px 1px 0px"
      padding="30px 0"
    >
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Size
      </Text>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          {data.map(({ size }) => (
            <Box
              backgroundColor="gray100"
              borderRadius="8px"
              px="7px"
              py="10px"
              mr="11px"
              background="darkGrey30"
              _active={{
                background: 'gray100',
                color: 'primary'
              }}
            >
              <Radio value={size}>{size}</Radio>
            </Box>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default SizeGroup
