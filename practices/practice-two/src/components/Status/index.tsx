import { Box, Tag, TagLabel } from '@chakra-ui/react'

export interface IStatusProps {
  text: string
  variant: string
  isDot?: boolean
  background?: string
}

const Status = ({ text, variant, isDot, background }: IStatusProps) => {
  return (
    <Tag variant={variant} borderRadius="1" gap="1.5">
      {isDot && (
        <Box background={background} w="1.5" h="1.5" borderRadius="0.5" />
      )}
      <TagLabel>{text}</TagLabel>
    </Tag>
  )
}

export default Status
