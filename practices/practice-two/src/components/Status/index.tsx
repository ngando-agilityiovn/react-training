import { Box, Tag, TagLabel } from '@chakra-ui/react'

export interface IStatusProps {
  text: string
  variant: string
  isDot?: boolean
  background?: string
}

export const Status = ({ text, variant, isDot, background }: IStatusProps) => {
  return (
    <Tag variant={variant} borderRadius="0.25rem" gap="0.375rem">
      {isDot && (
        <Box
          background={background}
          w="0.375rem"
          h="0.375rem"
          borderRadius="0.125rem"
        />
      )}
      <TagLabel>{text}</TagLabel>
    </Tag>
  )
}
