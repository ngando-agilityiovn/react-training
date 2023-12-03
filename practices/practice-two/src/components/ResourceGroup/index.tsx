import { Box, Flex, Tag, Text } from '@chakra-ui/react'

// Types
import { TagGroup } from '@/types'

interface IResourceProps {
  title: string
  handleTagChange: (text: string) => void
  tagGroup: TagGroup[]
  selectedTags: string[]
}

const ResourceGroup = ({
  title,
  tagGroup,
  selectedTags,
  handleTagChange,
}: IResourceProps) => {
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
        {tagGroup.map(({ id, text }) => {
          const isSelected = selectedTags.includes(text)
          console.log(selectedTags)

          return (
            <Tag
              key={id}
              id={id}
              variant={isSelected ? 'success' : 'outline'}
              onClick={() => handleTagChange(text)}
            >
              {text}
            </Tag>
          )
        })}
      </Flex>
    </Box>
  )
}

export default ResourceGroup
