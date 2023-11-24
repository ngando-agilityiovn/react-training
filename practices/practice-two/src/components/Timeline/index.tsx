import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, FormLabel, Input, Select } from '@chakra-ui/react'

export interface TimelineGroup {
  id: string
  option: string
}

interface ITimelineProps {
  title: string
  timelineGroup: TimelineGroup[]
  isCustom: boolean
  onChange: (option: string) => void
}

export const Timeline = ({
  title,
  timelineGroup,
  isCustom = false,
}: ITimelineProps) => {
  return (
    <>
      <FormLabel>{title}</FormLabel>
      <Select placeholder="Select option" mb="1.25rem">
        {timelineGroup.map(({ id, option }) => {
          return (
            <>
              <option key={id}>{option}</option>
            </>
          )
        })}
      </Select>
      {isCustom && (
        <Box>
          <Input
            placeholder="Select Date and Time"
            size="md"
            width="50"
            type="datetime-local"
            pl="1.25rem"
          />
          <ChevronRightIcon mx="12px" />
          <Input
            placeholder="Select Date and Time"
            size="md"
            width="50"
            type="datetime-local"
            pl="1.25rem"
          />
        </Box>
      )}
    </>
  )
}
