// Components
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

const ResourceGroup = ({ title, variant, tagGroup }: IResourceProps) => {
  return (
    <Box mb="2rem">
      <Text
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="medium"
        lineHeight="shorter"
        color="secondary"
      >
        {title}
      </Text>
      <Flex gap="0.625rem" mt="0.5rem" flexWrap="wrap">
        {tagGroup.map(({ id, text }) => (
          <Tag key={id} variant={variant}>
            {text}
          </Tag>
        ))}
      </Flex>
    </Box>
  )
}

export default ResourceGroup
