import { Box, Flex, Tag, Text } from '@chakra-ui/react'

export interface TagGroup {
  id: string
  text: string
}

interface IResourceProps {
  title: string
  variant: string
  tagGroup: TagGroup[]
}

export const ResourceGroup = ({ title, variant, tagGroup }: IResourceProps) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Flex gap="0.625rem" mt="0.5rem">
        {tagGroup.map(({ id, text }) => (
          <Tag key={id} variant={variant}>
            {text}
          </Tag>
        ))}
      </Flex>
    </Box>
  )
}
