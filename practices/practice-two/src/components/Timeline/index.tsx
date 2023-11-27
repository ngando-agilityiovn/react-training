import { ChangeEvent, memo, useState } from 'react'

import { ChevronRightIcon } from '@chakra-ui/icons'

// Components
import { Box, FormLabel, HStack, Input, Text } from '@chakra-ui/react'

interface ITimelineProps {
  title: string
}

export const Timeline = memo(({ title }: ITimelineProps) => {
  const [fromDateTime, setFromDateTime] = useState<string>('')
  const [toDateTime, setToDateTime] = useState<string>('')

  // This function will implement change value when user choose date
  const handleDateTimeChange = (
    event: ChangeEvent<HTMLInputElement>,
    setDateTime: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { value } = event.target
    setDateTime(value)
  }

  return (
    <Box w="100%" mb="2rem">
      <FormLabel fontSize="sm" fontWeight="medium" color="secondary">
        {title}
      </FormLabel>
      <HStack gap="0">
        <Box w="45%">
          <Text variant="secondary" mb="0.563rem">
            From
          </Text>
          <Input
            value={fromDateTime}
            onChange={(e) => handleDateTimeChange(e, setFromDateTime)}
            placeholder="Select Date and Time"
            size="md"
            type="date"
          />
        </Box>
        <ChevronRightIcon w="10%" mt="1.875rem" />
        <Box w="45%">
          <Text variant="secondary" mb="0.563rem">
            To
          </Text>
          <Input
            value={toDateTime}
            onChange={(e) => handleDateTimeChange(e, setToDateTime)}
            placeholder="Select Date and Time"
            size="md"
            type="date"
          />
        </Box>
      </HStack>
    </Box>
  )
})
