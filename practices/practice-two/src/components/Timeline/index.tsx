import { ChangeEvent, memo, useState } from 'react'

import { ChevronRightIcon } from '@chakra-ui/icons'

// Components
import { Box, FormLabel, HStack, Input, Text } from '@chakra-ui/react'

interface ITimelineProps {
  title: string
  onChange: (value: string, name: string) => void
}

const Timeline = memo(({ title, onChange }: ITimelineProps) => {
  const [fromDateTime, setFromDateTime] = useState<string>('')
  const [toDateTime, setToDateTime] = useState<string>('')

  // This function will implement change value when user choose date
  const handleDateTimeChange = (
    event: ChangeEvent<HTMLInputElement>,
    setDateTime: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { value, name } = event.target
    setDateTime(value)
    onChange(value, name)
  }

  return (
    <Box w="100%" mb="8">
      <FormLabel fontSize="sm" fontWeight="medium" color="secondary">
        {title}
      </FormLabel>
      <HStack gap="0">
        <Box w="45%">
          <Text variant="secondary" mb="2.5">
            From
          </Text>
          <Input
            value={fromDateTime}
            name="start"
            onChange={(e) => handleDateTimeChange(e, setFromDateTime)}
            placeholder="Select Date and Time"
            size="md"
            type="date"
          />
        </Box>
        <ChevronRightIcon w="10%" mt="7.5" />
        <Box w="45%">
          <Text variant="secondary" mb="2.5">
            To
          </Text>
          <Input
            name="end"
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

export default Timeline
