import { ChangeEvent, memo, useState } from 'react'
import { Box, Flex, HStack, Input, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface ITimelineProps {
  title: string
  startTime: string
  endTime: string
  onChange: (value: string, name: string) => void
  errorMessage: string
}

const Timeline = memo(
  ({ title, startTime, endTime, onChange, errorMessage }: ITimelineProps) => {
    const [fromDateTime, setFromDateTime] = useState<string>(startTime)
    const [toDateTime, setToDateTime] = useState<string>(endTime)

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
        <Flex fontSize="sm" fontWeight="medium" color="secondary">
          <Text>{title}</Text>
          <Text color="red">*</Text>
        </Flex>
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
          <ChevronRightIcon w="10%" mt="30px" />
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
        {/* {Error message} */}
        {errorMessage && (
          <Text mt="2" fontSize="sm" color="textError">
            {errorMessage}
          </Text>
        )}
      </Box>
    )
  },
)

export default Timeline
