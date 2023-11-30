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
    <Box mb="8">
      <Text
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="medium"
        lineHeight="shorter"
        color="secondary"
      >
        {title}
      </Text>
      <Flex gap="2.5" mt="2" flexWrap="wrap">
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
