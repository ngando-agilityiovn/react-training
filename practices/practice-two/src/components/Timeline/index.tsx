import { ReactNode, memo, useCallback, useState } from 'react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import { Box, FormLabel, HStack, Text } from '@chakra-ui/react'
import { DatePicker } from 'chakra-ui-date-input'

type Timeline = {
  start: string
  end: string
}

interface ITimelineProps {
  title: string
  startDateIcon?: ReactNode
  endDateIcon?: ReactNode
  onChange: (date: Timeline) => void
}

export const Timeline = memo(({ title, onChange }: ITimelineProps) => {
  const [timeline, setTimeline] = useState({ start: '', end: '' })

  const handleChangeStartDate = useCallback(
    (date: string) => {
      setTimeline((prevTimeline) => ({ ...prevTimeline, start: date }))
      onChange({ ...timeline, start: date })
    },
    [onChange, timeline],
  )

  const handleChangEndDate = useCallback(
    (date: string) => {
      setTimeline((prevTimeline) => ({ ...prevTimeline, end: date }))
      onChange({ ...timeline, end: date })
    },
    [onChange, timeline],
  )

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
          <DatePicker
            placeholder="DD/MM/YYYY"
            size="md"
            width="50"
            pl="1.25rem"
            defaultValue={timeline.start}
            onChange={handleChangeStartDate}
          />
        </Box>
        <ChevronRightIcon w="10%" mt="1.875rem" />
        <Box w="45%">
          <Text variant="secondary" mb="0.563rem">
            To
          </Text>
          <DatePicker
            placeholder="DD/MM/YYYY"
            size="md"
            width="50"
            pl="1.25rem"
            defaultValue={timeline.end}
            onChange={handleChangEndDate}
          />
        </Box>
      </HStack>
    </Box>
  )
})

Timeline.displayName = 'Timeline'
